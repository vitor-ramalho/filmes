import {
  Controller,
  Get,
  Param,
  Post,
  Req,
  Body,
  ParseIntPipe,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from 'express';
import { Movie } from './movie.entity';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { JwtGuard } from 'src/auth/guard/jwt.guard';

@Controller('movie')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @UseGuards(JwtGuard)
  @Post()
  async add(@Body() createMovieDto: CreateMovieDto) {
    return this.movieService.add(createMovieDto);
  }

  @Get()
  findAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Movie> {
    return this.movieService.findOne(id);
  }

  @Get('byTitle/:title')
  findByTitle(@Param('title') title: string): Promise<Movie> {
    return this.movieService.findByTitle(title);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return this.movieService.remove(id);
  }
}
