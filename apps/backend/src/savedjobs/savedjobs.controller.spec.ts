import { Test, TestingModule } from '@nestjs/testing';
import { SavedjobsController } from './savedjobs.controller';

describe('SavedjobsController', () => {
  let controller: SavedjobsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SavedjobsController],
    }).compile();

    controller = module.get<SavedjobsController>(SavedjobsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
