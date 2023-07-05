"use strict";
import { DataTypes } from "sequelize";
import {
  studentinterface,
  studentCreationinterface,
} from "@/interfaces/student.interface";

import {
  BelongsToMany,
  Column,
  CreatedAt,
  DeletedAt,
  HasMany,
  HasOne,
  Model,
  Table,
  UpdatedAt,
} from "sequelize-typescript";
import Class from "./class";
import ReportCard from "./reportcard";
import Course from "./course";
import StudentCourse from "./studentcourse";
import Attendance from "./attendance";
import Complaint from "./complaint";

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

  // @HasOne(() => Class)
  // class?: Class;
  //========================= Many To Many =====================================
  @BelongsToMany(() => Course, {
    through: { model: () => StudentCourse },
  })
  courses!: Course[];
  //=========================================================================

  //========================= Many To One =====================================

  @HasOne(() => Class, "studentId")
  class: Class;
  //=========================================================================

  //========================= One To One =====================================

  @HasOne(() => ReportCard, "studentId")
  reportcard: ReportCard;
  //=========================================================================

  //========================= Many  To Many Polymorphic =====================================

  @HasMany(() => Attendance, {
    foreignKey: "attendanceId",
    constraints: false,
  })
  attendances?: Attendance;
  //=========================================================================
  //========================= Many  To Many Polymorphic =====================================

  @HasMany(() => Complaint, {
    foreignKey: "complaintId",
    constraints: false,
  })
  complaint?: Complaint;
  //=========================================================================
  // @HasMany(() => Token, "userId")
  // tokens: Token[];
}
