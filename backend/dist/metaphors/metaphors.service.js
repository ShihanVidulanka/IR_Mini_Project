"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaphorsService = void 0;
const common_1 = require("@nestjs/common");
const elasticsearch_1 = require("@nestjs/elasticsearch");
let MetaphorsService = class MetaphorsService {
    constructor(elasticsearchService) {
        this.elasticsearchService = elasticsearchService;
        this.result_size = 100;
    }
    async GetAll() {
        try {
            const response = await this.elasticsearchService.search({
                index: 'poem-metaphor',
                body: {
                    size: this.result_size,
                    query: {
                        match_all: {},
                    },
                },
            });
            const result = response.hits.hits;
            return result;
        }
        catch (error) {
            return error;
        }
    }
    async Search(poetry, poet, title, metaphor) {
        try {
            const query = {
                index: 'poem-metaphor',
                body: {
                    size: this.result_size,
                    query: {
                        bool: {
                            must: [],
                        },
                    },
                },
            };
            if (poetry != '') {
                query.body.query.bool.must.push({
                    match: {
                        poem: poetry,
                    },
                });
            }
            if (title != '') {
                query.body.query.bool.must.push({
                    match: {
                        poem_name: title,
                    },
                });
            }
            if (poet != '') {
                query.body.query.bool.must.push({
                    match: {
                        poet: poet,
                    },
                });
            }
            if (metaphor != '') {
                query.body.query.bool.must.push({
                    nested: {
                        path: 'metaphors',
                        query: {
                            bool: {
                                must: [
                                    {
                                        match: {
                                            'metaphors.metaphor': metaphor,
                                        },
                                    },
                                ],
                            },
                        },
                        score_mode: 'avg',
                    },
                });
            }
            const response = await this.elasticsearchService.search(query);
            const result = response.hits.hits;
            return result;
        }
        catch (error) {
            return error;
        }
    }
};
exports.MetaphorsService = MetaphorsService;
exports.MetaphorsService = MetaphorsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [elasticsearch_1.ElasticsearchService])
], MetaphorsService);
//# sourceMappingURL=metaphors.service.js.map