import { Test, TestingModule } from '@nestjs/testing';
import { DatosGeocController } from './datos-geoc.controller';

describe('DatosGeocController', () => {
  let controller: DatosGeocController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatosGeocController],
    }).compile();

    controller = module.get<DatosGeocController>(DatosGeocController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
