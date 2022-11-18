import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from 'express';
import { Movie } from './movie.entity';

@Controller('movie')
export class MovieController {
  constructor(
    @InjectRepository(Movie) private movieRepository: Repository<Movie>,
  ) {}
  @Post()
  async add(@Req() request: Request) {
    return this.movieRepository.save({
      ownerId: 1,
      title: request.body['title'],
      description: request.body['title'],
      genre: request.body['genre'],
    });
  }

  @Get(':id')
  findAll(@Param('id') id): Promise<Movie[]> {
    return this.movieRepository.find({ where: { ownerId: 1 } });
  }
}
