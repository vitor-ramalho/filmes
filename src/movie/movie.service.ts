import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './movie.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie) private movieRepository: Repository<Movie>,
  ) {}

  async add(createMovieDto: CreateMovieDto): Promise<Movie> {
    try {
      const movie = await this.movieRepository.save({
        title: createMovieDto.title,
        description: createMovieDto.description,
        genre: createMovieDto.genre,
        ownerId: createMovieDto.ownerId,
      });

      return movie;
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }

  async findAll(): Promise<Movie[]> {
    try {
      const movies = await this.movieRepository.find();

      return movies;
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }

  async findByTitle(title: string): Promise<Movie> {
    try {
      const movie = await this.movieRepository.findOneBy({ title: title });

      return movie;
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }

  async findOne(id: number): Promise<Movie> {
    try {
      const movie = await this.movieRepository.findOneBy({
        id: id,
      });

      return movie;
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }

  async remove(id: number): Promise<string> {
    try {
      await this.movieRepository.delete(id);

      return 'Sucessfull deleted movie';
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }
}
