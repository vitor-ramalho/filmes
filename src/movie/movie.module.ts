import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { Movie } from './movie.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Movie]), AuthModule],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
