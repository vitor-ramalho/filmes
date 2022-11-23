import { IsEmail, IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateAdminDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsNumber()
  @IsOptional()
  role?: number;
}
