import { IsEmail, IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateMovieDto {
  @IsNumber()
  @IsNotEmpty()
  ownerId: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  genre: string;
}
