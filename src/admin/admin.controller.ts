import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  ParseIntPipe,
  UseGuards,
  Patch,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private adminService: AdminService) {}

  @UseGuards(JwtGuard)
  @Post()
  add(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.add(createAdminDto);
  }

  @Get()
  findAll(): Promise<Admin[]> {
    return this.adminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Admin> {
    return this.adminService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAdminDto: UpdateAdminDto,
  ) {
    return this.adminService.update(id, updateAdminDto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.adminService.remove(id);
  }
}
