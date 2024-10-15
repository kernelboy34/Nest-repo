import { Test, TestingModule } from '@nestjs/testing';
import { DatosGeocService } from './datos-geoc.service';

describe('DatosGeocService', () => {
  let service: DatosGeocService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatosGeocService],
    }).compile();

    service = module.get<DatosGeocService>(DatosGeocService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
