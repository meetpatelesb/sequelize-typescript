"use strict";
import { DataTypes } from "sequelize";
import {
  classinterface,
  classCreationinterface,
} from "@/interfaces/class.interface";

import {
  BelongsTo,
  Column,
  CreatedAt,
  DeletedAt,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from "sequelize-typescript";
import Student from "./student";

@Table({
  timestamps: true,
  paranoid: true,
  tableName: "Classes",
})
export default class Class
  extends Model<classinterface, classCreationinterface>
  implements classinterface
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

  //========================= Many To One =====================================

  @ForeignKey(() => Student)
  @Column
  studentId: number;

  @BelongsTo(() => Student, {
    foreignKey: "studentId",
    // constraints: false,
    // as: "student",
  })
  student?: Student;
  //==========================================================================


  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
