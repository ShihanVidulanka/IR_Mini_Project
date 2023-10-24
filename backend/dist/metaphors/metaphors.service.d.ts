import { ElasticsearchService } from '@nestjs/elasticsearch';
export declare class MetaphorsService {
    private readonly elasticsearchService;
    result_size: number;
    constructor(elasticsearchService: ElasticsearchService);
    GetAll(): Promise<any>;
    searchAll(searchPhrase: string): Promise<any>;
    getMetaphors(searchPhrase: string): Promise<any>;
    getMetaphorsByPoet(searchPhrase: string): Promise<any>;
    getMetaphorsByPoemandTitle(searchPhrase: string): Promise<any>;
    getMetaphorsByPoem(searchPhrase: string): Promise<any>;
    getMetaphorsByPoemTitle(searchPhrase: string): Promise<any>;
}
