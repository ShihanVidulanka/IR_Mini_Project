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
            console.log(result);
            return result;
        }
        catch (error) {
            return error;
        }
    }
    async searchAll(searchPhrase) {
        try {
            const response = await this.elasticsearchService.search({
                index: 'poem-metaphor',
                body: {
                    size: this.result_size,
                    query: {
                        bool: {
                            must: [
                                {
                                    multi_match: {
                                        query: searchPhrase,
                                        fields: ['poet', 'poem_name', 'poem'],
                                    },
                                },
                            ],
                        },
                    },
                },
            });
            const result = response.hits.hits;
            console.log(result);
            return result;
        }
        catch (error) {
            return error;
        }
    }
    async getMetaphors(searchPhrase) {
        try {
            const response = await this.elasticsearchService.search({
                index: 'poem-metaphor',
                body: {
                    size: this.result_size,
                    query: {
                        nested: {
                            path: 'metaphors',
                            query: {
                                bool: {
                                    must: [
                                        {
                                            match: {
                                                'metaphors.metaphor': searchPhrase,
                                            },
                                        },
                                    ],
                                },
                            },
                        },
                    },
                },
            });
            const result = response.hits.hits;
            console.log(result);
            return result;
        }
        catch (error) {
            return error;
        }
    }
    async getMetaphorsByPoet(searchPhrase) {
        try {
            const response = await this.elasticsearchService.search({
                index: 'poem-metaphor',
                body: {
                    size: this.result_size,
                    query: {
                        bool: {
                            must: [
                                {
                                    match: {
                                        poet: searchPhrase,
                                    },
                                },
                            ],
                        },
                    },
                },
            });
            const result = response.hits.hits;
            console.log(result);
            return result;
        }
        catch (error) {
            return error;
        }
    }
    async getMetaphorsByPoemandTitle(searchPhrase) {
        try {
            const response = await this.elasticsearchService.search({
                index: 'poem-metaphor',
                body: {
                    size: this.result_size,
                    query: {
                        bool: {
                            must: [
                                {
                                    multi_match: {
                                        query: searchPhrase,
                                        fields: ['poem_name', 'poem'],
                                    },
                                },
                            ],
                        },
                    },
                },
            });
            const result = response.hits.hits;
            console.log(result);
            return result;
        }
        catch (error) {
            return error;
        }
    }
    async getMetaphorsByPoem(searchPhrase) {
        try {
            const response = await this.elasticsearchService.search({
                index: 'poem-metaphor',
                body: {
                    size: this.result_size,
                    query: {
                        bool: {
                            must: [
                                {
                                    match: {
                                        poem: searchPhrase,
                                    },
                                },
                            ],
                        },
                    },
                },
            });
            const result = response.hits.hits;
            console.log(result);
            return result;
        }
        catch (error) {
            return error;
        }
    }
    async getMetaphorsByPoemTitle(searchPhrase) {
        try {
            const response = await this.elasticsearchService.search({
                index: 'poem-metaphor',
                body: {
                    size: this.result_size,
                    query: {
                        bool: {
                            must: [
                                {
                                    match: {
                                        poem_name: searchPhrase,
                                    },
                                },
                            ],
                        },
                    },
                },
            });
            const result = response.hits.hits;
            console.log(result);
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