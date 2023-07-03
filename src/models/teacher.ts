"use strict";
import { DataTypes } from "sequelize";
import {
  teacherinterface,
  teacherCreationinterface,
} from "@/interfaces/teacher.interface";

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
  tableName: "Teachers",
})
export default class Teacher
  extends Model<teacherinterface, teacherCreationinterface>
  implements teacherinterface
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  id: number;

  @Column
  firstname: string;

  @Column
  lastname: string;
  @Column
  classname: string;
  @Column
  experiance: number;

  @Column
  phone: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
