// src/models/Comment.ts
import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Blog } from './blog.model';
import { User } from './user.model';

@Table({ tableName: 'comments', timestamps: true })
export class Comment extends Model {
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  content!: string;

  @ForeignKey(() => Blog)
  @Column({ type: DataType.INTEGER })
  blogId!: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId!: number;

  @BelongsTo(() => Blog)
  blog!: Blog;

  @BelongsTo(() => User)
  user!: User;
}

export default Comment;
