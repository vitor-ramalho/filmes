import {
  Injectable,
  HttpException,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { ConfigService } from '@nestjs/config';
import * as argon from 'argon2';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from 'src/admin/admin.entity';
import { Repository } from 'typeorm';
import { SignInDto } from './dto/signin.dto';
import { AuthDto } from './dto/auth.dto';
@Injectable()
export class AuthService {
  constructor(
    private jwt: JwtService,
    @InjectRepository(Admin) private adminRepository: Repository<Admin>,
    private config: ConfigService,
  ) {}

  async signup(dto: SignUpDto): Promise<Admin> {
    const hash = await argon.hash(dto.password);

    try {
      const admin = await this.adminRepository.save({
        name: dto.name,
        email: dto.email,
        password: hash,
        role: dto.role,
      });

      delete admin.password;
      return admin;
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }

  async signin(dto: AuthDto) {
    const admin = await this.adminRepository.findOne({
      where: { email: dto.email },
    });

    if (!admin) throw new NotFoundException('Admin not found');

    const passwordMatch = await argon.verify(admin.password, dto.password);

    if (!passwordMatch) throw new ForbiddenException('Credentials taken');

    const secret = this.config.get('JWT_SECRET');
    const payload = {
      sub: admin.id,
      email: admin.email,
    };

    const token = await this.jwt.signAsync(payload, {
      secret: secret,
    });

    delete admin.password;
    return {
      admin,
      auth: token,
    };
  }
}
