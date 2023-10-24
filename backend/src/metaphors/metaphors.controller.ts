import { Body, Controller, Post } from '@nestjs/common';
import { MetaphorsService } from './metaphors.service';

@Controller('metaphors')
export class MetaphorsController {
  constructor(private readonly metaphorsService: MetaphorsService) {}

  @Post()
  getMetaphors(
    @Body()
    searchParams: {
      poetry: string;
      poet: string;
      title: string;
      metaphor: string;
    },
  ): any {
    const { poetry, poet, title, metaphor } = searchParams;
    console.log(poetry, poet, title, metaphor);

    if (poetry != '' || title != '' || metaphor != '' || poet != '') {
      return this.metaphorsService.Search(poetry, poet, title, metaphor);
    } else {
      console.log('All', poetry, poet, title, metaphor);
      return this.metaphorsService.GetAll();
    }
  }
}
