import { ElasticsearchService } from '@nestjs/elasticsearch';
export declare class MetaphorsService {
    private readonly elasticsearchService;
    constructor(elasticsearchService: ElasticsearchService);
    searchAll(searchPhrase: string): Promise<any>;
    getMetaphors(searchPhrase: string): Promise<any>;
    getMetaphorsByPoet(searchPhrase: string): Promise<any>;
    getMetaphorsByPoemandTitle(searchPhrase: string): Promise<any>;
    getMetaphorsByPoem(searchPhrase: string): Promise<any>;
    getMetaphorsByPoemTitle(searchPhrase: string): Promise<any>;
}
