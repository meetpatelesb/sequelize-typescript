"use strict";
import { DataTypes } from "sequelize";
import {
  studentinterface,
  studentCreationinterface,
} from "@/interfaces/student.interface";

import { Column,CreatedAt,DeletedAt,Model,Table,UpdatedAt } from "sequelize-typescript";


@Table({
  timestamps: true,
  paranoid: true,
  tableName: "Students",
})
export default class Student
  extends Model<studentinterface, studentCreationinterface>
  implements studentinterface
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
  phone: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}