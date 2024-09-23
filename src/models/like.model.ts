// src/models/Like.ts
import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user.model';
import { Blog } from './blog.model';

@Table({ tableName: 'likes', timestamps: true })
export class Like extends Model {
  @ForeignKey(() => Blog)
  @Column({ type: DataType.INTEGER, allowNull: false })
  blogId!: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  createdAt!: Date;

  @BelongsTo(() => Blog)
  blog!: Blog;

  @BelongsTo(() => User)
  user!: User;
}

export default Like;
