// src/models/Blog.ts
import { Model, Table, Column, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { User } from './user.model';
import { Category } from './category.model';
import { Comment } from './comment.model';

@Table({ tableName: 'blogs', timestamps: true })
export class Blog extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  content!: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  published!: boolean;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId!: number;

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER })
  categoryId!: number;

  @BelongsTo(() => User)
  user!: User;

  @BelongsTo(() => Category)
  category!: Category;

  @HasMany(() => Comment)
  comments!: Comment[];
}

export default Blog;
