import { Test, TestingModule } from '@nestjs/testing';
import { MetaphorsService } from './metaphors.service';

describe('MetaphorsService', () => {
  let service: MetaphorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetaphorsService],
    }).compile();

    service = module.get<MetaphorsService>(MetaphorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
