// metaphors.service.ts

import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class MetaphorsService {
    constructor(private readonly elasticsearchService: ElasticsearchService) { }

    async searchAll(searchPhrase: string): Promise<any> {
        try {
            const response = await this.elasticsearchService.search({
                index: 'poem-metaphor', // Replace with your index name
                body: {
                    query: {
                        bool: {
                            must: [
                                {
                                    multi_match: {
                                        query: searchPhrase,
                                        fields: [
                                            "poet",
                                            "poem_name",
                                            "poem"
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                },
            });

            const result = response.hits.hits
            console.log(result)
            return result
        } catch (error) {
            return error; // Return Elasticsearch error
        }
    }

    async getMetaphors(searchPhrase: string): Promise<any> {
        try {
            const response = await this.elasticsearchService.search({
                index: 'poem-metaphor', // Replace with your index name
                body: {
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
                            score_mode: 'avg',
                        },
                    },
                },
            });

            const result = response.hits.hits
            console.log(result)
            return result

        } catch (error) {
            return error; // Return Elasticsearch error
        }
    }

    async getMetaphorsByPoet(searchPhrase: string): Promise<any> {
        try {
            const response = await this.elasticsearchService.search({
                index: 'poem-metaphor', // Replace with your index name
                body: {
                    query: {
                        bool: {
                            must: [
                                {
                                    match: {
                                        poet: searchPhrase
                                    }
                                }
                            ]
                        }
                    }
                },
            });

            const result = response.hits.hits
            console.log(result)
            return result

        } catch (error) {
            return error; // Return Elasticsearch error
        }
    }
    async getMetaphorsByPoemandTitle(searchPhrase: string): Promise<any> {
        try {
            const response = await this.elasticsearchService.search({
                index: 'poem-metaphor', // Replace with your index name
                body: {
                    query: {
                        bool: {
                            must: [
                                {
                                    multi_match: {
                                        query: searchPhrase,
                                        fields: [
                                            "poem_name",
                                            "poem"
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                },
            });

            const result = response.hits.hits
            console.log(result)
            return result

        } catch (error) {
            return error; // Return Elasticsearch error
        }
    }
    async getMetaphorsByPoem(searchPhrase: string): Promise<any> {
        try {
            const response = await this.elasticsearchService.search({
                index: 'poem-metaphor', // Replace with your index name
                body: {
                    query: {
                        bool: {
                            must: [
                                {
                                    match: {
                                        poem: searchPhrase
                                    }
                                }
                            ]
                        }
                    }
                },
            });

            const result = response.hits.hits
            console.log(result)
            return result

        } catch (error) {
            return error; // Return Elasticsearch error
        }
    }
    async getMetaphorsByPoemTitle(searchPhrase: string): Promise<any> {
        try {
            const response = await this.elasticsearchService.search({
                index: 'poem-metaphor', // Replace with your index name
                body: {
                    query: {
                        bool: {
                            must: [
                                {
                                    match: {
                                        poem_name: searchPhrase
                                    }
                                }
                            ]
                        }
                    }
                },
            });

            const result = response.hits.hits
            console.log(result)
            return result

        } catch (error) {
            return error; // Return Elasticsearch error
        }
    }
}