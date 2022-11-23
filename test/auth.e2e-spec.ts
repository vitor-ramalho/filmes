import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as pactum from 'pactum';
import { Admin } from 'src/admin/admin.entity';
import { AppModule } from 'src/app.module';
import { Repository } from 'typeorm';

describe('Auth test e2e', () => {
  let app: INestApplication;
  let admin_repository: Repository<Admin>;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );

    await app.init();
    await app.listen(5000);
  });
});
