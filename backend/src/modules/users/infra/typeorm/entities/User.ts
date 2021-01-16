import { v4 as uuid } from 'uuid'
import bcrypt from 'bcryptjs'

import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  DeleteDateColumn,
  BeforeUpdate
} from 'typeorm'
import { Exclude } from 'class-transformer'

@Entity('users')
export default class User {
  @PrimaryColumn('uuid')
  user_id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @BeforeInsert()
  userProps (): void {
    this.user_id = uuid()
  }

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword (): Promise<void> {
    this.password = await bcrypt.hash(this.password, 8)
  }
}
