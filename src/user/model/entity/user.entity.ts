import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { User } from '../user.interface';
import * as bcrypt from 'bcrypt';

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

  @BeforeInsert()
  async encryptPassword() {
    const salt = await bcrypt.genSalt(10);
    this._password = await bcrypt.hash(this._password, salt);
  }
}
