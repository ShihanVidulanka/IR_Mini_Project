// metaphors.service.ts

import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class MetaphorsService {
  result_size = 100;
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async GetAll(): Promise<any> {
    try {
      const response = await this.elasticsearchService.search({
        index: 'poem-metaphor', // Replace with your index name
        body: {
          size: this.result_size,
          query: {
            match_all: {},
          },
        },
      });

      const result = response.hits.hits;
      // console.log(result);
      return result;
    } catch (error) {
      return error; // Return Elasticsearch error
    }
  }

  async Search(
    poetry: string,
    poet: string,
    title: string,
    metaphor: string,
  ): Promise<any> {
    try {
      const query = {
        index: 'poem-metaphor', // Replace with your index name
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
          match_phrase: {
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

      // console.log(result);

      return result;
    } catch (error) {
      return error; // Return Elasticsearch error
    }
  }
}
