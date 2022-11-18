import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin) private adminRepository: Repository<Admin>,
  ) {}

  add(admin: {
    name: string;
    email: any;
    password: any;
    role: 1;
  }): Promise<Admin> {
    return this.adminRepository.save(admin);
  }

  EncontrarUm(id: number): Promise<Admin> {
    return this.adminRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.adminRepository.delete(id);
  }
}
