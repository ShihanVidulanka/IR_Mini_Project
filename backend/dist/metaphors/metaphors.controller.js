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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaphorsController = void 0;
const common_1 = require("@nestjs/common");
const metaphors_service_1 = require("./metaphors.service");
let MetaphorsController = class MetaphorsController {
    constructor(metaphorsService) {
        this.metaphorsService = metaphorsService;
    }
    getMetaphors(searchParams) {
        const { poetry, poet, title, metaphor } = searchParams;
        console.log(poetry, poet, title, metaphor);
        if (poetry != '' || title != '' || metaphor != '' || poet != '') {
            return this.metaphorsService.Search(poetry, poet, title, metaphor);
        }
        else {
            console.log('All', poetry, poet, title, metaphor);
            return this.metaphorsService.GetAll();
        }
    }
};
exports.MetaphorsController = MetaphorsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], MetaphorsController.prototype, "getMetaphors", null);
exports.MetaphorsController = MetaphorsController = __decorate([
    (0, common_1.Controller)('metaphors'),
    __metadata("design:paramtypes", [metaphors_service_1.MetaphorsService])
], MetaphorsController);
//# sourceMappingURL=metaphors.controller.js.map