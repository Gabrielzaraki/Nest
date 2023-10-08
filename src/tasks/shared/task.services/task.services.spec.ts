import { Test, TestingModule } from '@nestjs/testing';
import { TaskServices } from './task.services';

describe('TaskServices', () => {
  let provider: TaskServices;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskServices],
    }).compile();

    provider = module.get<TaskServices>(TaskServices);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
