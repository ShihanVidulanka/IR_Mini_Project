import { ElasticsearchService } from '@nestjs/elasticsearch';
export declare class MetaphorsService {
    private readonly elasticsearchService;
    result_size: number;
    constructor(elasticsearchService: ElasticsearchService);
    GetAll(): Promise<any>;
    Search(poetry: string, poet: string, title: string, metaphor: string): Promise<any>;
}
