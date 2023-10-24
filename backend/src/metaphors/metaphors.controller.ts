import { Body, Controller, Post } from '@nestjs/common';
import { MetaphorsService } from './metaphors.service';

@Controller('metaphors')
export class MetaphorsController {
  constructor(private readonly metaphorsService: MetaphorsService) {}

  @Post()
  getMetaphors(
    @Body()
    searchParams: {
      searchPhrase: string;
      poetry: boolean;
      poet: boolean;
      title: boolean;
      metaphor: boolean;
    },
  ): any {
    const { searchPhrase, poetry, poet, title, metaphor } = searchParams;
    console.log(searchPhrase, poetry, poet, title, metaphor);

    if (searchPhrase == '') {
      return this.metaphorsService.GetAll();
    } else if (poetry && title) {
      return this.metaphorsService.getMetaphorsByPoemandTitle(searchPhrase);
    } else if (poetry) {
      return this.metaphorsService.getMetaphorsByPoem(searchPhrase);
    } else if (title) {
      return this.metaphorsService.getMetaphorsByPoemTitle(searchPhrase);
    } else if (poet) {
      return this.metaphorsService.getMetaphorsByPoet(searchPhrase);
    } else if (metaphor) {
      return this.metaphorsService.getMetaphors(searchPhrase);
    } else {
      return this.metaphorsService.searchAll(searchPhrase);
    }
  }
}
