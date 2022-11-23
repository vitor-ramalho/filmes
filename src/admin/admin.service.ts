import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';
import * as argon from 'argon2';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin) private adminRepository: Repository<Admin>,
  ) {}

  async add(createAdminDto: CreateAdminDto): Promise<Admin> {
    const hash = await argon.hash(createAdminDto.password);

    try {
      const admin = await this.adminRepository.save({
        name: createAdminDto.name,
        email: createAdminDto.email,
        password: hash,
        role: createAdminDto.role,
      });

      delete admin.password;
      return admin;
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }

  async findAll(): Promise<Admin[]> {
    try {
      const admins = await this.adminRepository.find();

      return admins;
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }

  async findOne(id: number): Promise<Admin> {
    try {
      const admin = await this.adminRepository.findOneBy({ id });

      return admin;
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    try {
      const updated_admin = await this.adminRepository.update(id, {
        email: updateAdminDto.email,
        name: updateAdminDto.name,
        role: updateAdminDto.role,
      });

      return updated_admin;
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }

  async remove(id: number): Promise<string> {
    try {
      await this.adminRepository.delete(id);

      return 'Successfull deleted admin';
    } catch (error) {
      throw new HttpException(error.message, 400);
    }
  }
}
