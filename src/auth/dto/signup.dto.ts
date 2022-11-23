import { IsNumber, IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class SignUpDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsNumber()
  @IsNotEmpty()
  role: number;
}
