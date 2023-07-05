"use strict";
import { DataTypes } from "sequelize";
import {
  attendanceinterface,
  attendanceCreationinterface,
} from "@/interfaces/attendance.interface";

import {
  BelongsTo,
  BelongsToMany,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from "sequelize-typescript";
import Student from "./student";
import Teacher from "./teacher";
import { attendanceType } from "@/interfaces/functional/attendanceType.interface";
// import Student from "./student";

@Table({
  timestamps: true,
  paranoid: true,
  tableName: "Attendances",
})
export default class Attendance
  extends Model<attendanceinterface, attendanceCreationinterface>
  implements attendanceinterface
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.ENUM(...Object.values(attendanceType)),
  })
  attendanceType: attendanceType;

  //========================= Many To Many Polymorphic =====================================
  @Column
  attendanceId: number;

  @BelongsTo(() => Student, {
    foreignKey: "attendanceId",
    constraints: false,
  })
  student?: Student;

  @BelongsTo(() => Teacher, {
    foreignKey: "attendanceId",
    constraints: false,
  })
  teacher?: Teacher;

  //==========================================================================
  @Column
  attendanceDate: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
