// src/models/Category.ts
import { Model, Table, Column, DataType, HasMany } from 'sequelize-typescript';
import { Blog } from './blog.model';

@Table({ tableName: 'categories', timestamps: true })
export class Category extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @HasMany(() => Blog)
  blogs!: Blog[];
}

export default Category;
