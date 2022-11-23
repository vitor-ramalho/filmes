import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { MovieModule } from './movie/movie.module';
import { Admin } from './admin/admin.entity';
import { Movie } from './movie/movie.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'filmesDB.sqlite',
      entities: [Admin, Movie],
      synchronize: true,
    }),
    ConfigModule.forRoot(),
    AdminModule,
    MovieModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
