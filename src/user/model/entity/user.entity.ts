import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { User } from '../user.interface';

@Entity({ name: 'users' })
export class UserEntity implements User {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column({ unique: true })
  _username: string;

  @Column({ unique: true })
  _email: string;

  @Column()
  _password: string;

  @UpdateDateColumn()
  _lastDateUpdated: Date;

  @CreateDateColumn()
  _createdDate: Date;

  @Column()
  _birthdate: Date;

  @Column()
  _firstname: string;

  @Column()
  _lastname: string;
}
