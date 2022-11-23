import { IsNumber, IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class SignInDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  role: string;
}
