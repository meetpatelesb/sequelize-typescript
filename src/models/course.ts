"use strict";
import { DataTypes } from "sequelize";
import {
  courseinterface,
  courseCreationinterface,
} from "@/interfaces/course.interface";

import {
  BelongsToMany,
  Column,
  CreatedAt,
  DeletedAt,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from "sequelize-typescript";
import Student from "./student";
import StudentCourse from "./studentcourse";

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

  //========================= Many To One =====================================

  @BelongsToMany(() => Student, {
    through: { model: () => StudentCourse },
  })
  students!: Student[];
  //==========================================================================

  //========================= Many To Many (for course to studentCourse relation define) =====================================

  @HasMany(() => StudentCourse, {
    foreignKey: "courseId",
    constraints: false,
  })
  studentCourse?: StudentCourse;
  //=========================================================================
}
