// src/models/User.ts
import { Model, Table, Column, DataType, HasMany } from 'sequelize-typescript';
import { Blog } from './blog.model';
import { Comment } from './comment.model';

@Table({ tableName: 'users', timestamps: true })
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.STRING,
    defaultValue: 'user', // 'admin' or 'user'
  })
  role!: string;

  @HasMany(() => Blog)
  blogs!: Blog[];

  @HasMany(() => Comment)
  comments!: Comment[];
}

export default User;
