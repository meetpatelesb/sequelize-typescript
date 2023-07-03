"use strict";
import { DataTypes } from "sequelize";
import {
  courseinterface,
  courseCreationinterface,
} from "@/interfaces/course.interface";

import {
  Column,
  CreatedAt,
  DeletedAt,
  Model,
  Table,
  UpdatedAt,
} from "sequelize-typescript";

@Table({
  timestamps: true,
  paranoid: true,
  tableName: "Courses",
})
export default class Course
  extends Model<courseinterface, courseCreationinterface>
  implements courseinterface
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  id: number;

  @Column
  name: string;


  @Column
  duration: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
