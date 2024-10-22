import { Test, TestingModule } from '@nestjs/testing';
import { SizesController } from './size.controller';
import { SizesService } from './size.service';

describe('SizesController', () => {
  let controller: SizesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SizesController],
      providers: [SizesService],
    }).compile();

    controller = module.get<SizesController>(SizesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
