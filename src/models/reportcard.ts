"use strict";
import { DataTypes } from "sequelize";
import {
  reportCardinterface,
  reportCardCreationinterface,
} from "@/interfaces/reportcard.interface";

import {
  BelongsTo,
  Column,
  CreatedAt,
  DeletedAt,
  ForeignKey,
  HasOne,
  Model,
  Table,
  UpdatedAt,
} from "sequelize-typescript";
import Student from "./student";

@Table({
  timestamps: true,
  paranoid: true,
  tableName: "ReportCards",
})
export default class ReportCard
  extends Model<reportCardinterface, reportCardCreationinterface>
  implements reportCardinterface
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  id: number;

  //========================= One To One =====================================

  @ForeignKey(() => Student)
  @Column({
    allowNull: false,
  })
  studentId: number;

  @BelongsTo(() => Student, {
    foreignKey: "studentId",
  })
  student?: Student;
  //===========================================================================
  @Column
  maths: number;

  @Column
  physics: number;

  @Column
  chemistry: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
