import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'session' })
export class SessionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  jwt: string;

  @Column({ unique: true })
  refresh: string;

  @Column()
  expiresAt: string;

  @UpdateDateColumn()
  lastDateUpdated: Date;

  @CreateDateColumn()
  createdDate: Date;
}
