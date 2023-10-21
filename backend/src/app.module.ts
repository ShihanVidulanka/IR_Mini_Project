import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch'; // Import the ElasticsearchModule
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MetaphorsService } from './metaphors/metaphors.service';
import { MetaphorsController } from './metaphors/metaphors.controller';

@Module({
  imports: [
    ElasticsearchModule.register({
      node: 'http://localhost:9200', // Replace with your Elasticsearch URL
    }),
  ],
  controllers: [AppController, MetaphorsController],
  providers: [AppService, MetaphorsService],
})
export class AppModule { }
