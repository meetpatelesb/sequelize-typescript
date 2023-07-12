"use strict";
import { DataTypes } from "sequelize";
import {
  studentCourseinterface,
  studentCourseCreationinterface,
} from "@/interfaces/studentCourse.interface";

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
import Course from "./course";
import Student from "./student";

@Table({
  timestamps: true,
  paranoid: true,
  tableName: "StudentCourses",
})
export default class StudentCourse
  extends Model<studentCourseinterface, studentCourseCreationinterface>
  implements studentCourseinterface
{
  //========================= Many To Many =====================================
  @Column({
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  id: number;

  @ForeignKey(() => Course)
  @Column
  courseId!: number;

  //========================= Many To Many (for  studentCourse  to course relation define) =====================================
  @BelongsTo(() => Course, {
    foreignKey: "courseId",
  })
  course?: Course;
  //===========================================================================================================================

  @ForeignKey(() => Student)
  @Column
  studentId!: number;

  //========================= Many To Many (for  studentCourse  to student  relation define) =====================================
  @BelongsTo(() => Student, {
    foreignKey: "studentId",
  })
  student?: Student;
  //===========================================================================================================================
  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
