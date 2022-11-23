import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AdminService } from 'src/admin/admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'src/admin/admin.entity';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({}),
    TypeOrmModule.forFeature([Admin]),
    ConfigModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, AdminService, JwtStrategy],
})
export class AuthModule {}
