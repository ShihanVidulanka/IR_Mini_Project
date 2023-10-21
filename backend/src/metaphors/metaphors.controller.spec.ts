import { Test, TestingModule } from '@nestjs/testing';
import { MetaphorsController } from './metaphors.controller';

describe('MetaphorsController', () => {
  let controller: MetaphorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MetaphorsController],
    }).compile();

    controller = module.get<MetaphorsController>(MetaphorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
