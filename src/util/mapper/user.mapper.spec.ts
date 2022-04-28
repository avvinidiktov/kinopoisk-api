import { Test, TestingModule } from '@nestjs/testing';
import { UserMapper } from './user.mapper';

describe('UserMapperService', () => {
  let service: UserMapper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserMapper],
    }).compile();

    service = module.get<UserMapper>(UserMapper);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
