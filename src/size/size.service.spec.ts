import { Test, TestingModule } from '@nestjs/testing';
import { SizeService } from './size.service';

describe('SizesService', () => {
  let service: SizeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SizeService],
    }).compile();

    service = module.get<SizeService>(SizeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
