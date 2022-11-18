import { Admin } from './../admin/admin.entity';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Admin, {
    createForeignKeyConstraints: false,
  })
  @Column()
  ownerId: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  genre: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
