"use strict";
import { DataTypes } from "sequelize";
import {
  complaintinterface,
  complaintCreationinterface,
} from "@/interfaces/complaint.interface";

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
import { complaintType } from "@/interfaces/functional/complaintType.interface";

@Table({
  timestamps: true,
  paranoid: true,
  tableName: "Complaints",
})
export default class Complaint
  extends Model<complaintinterface, complaintCreationinterface>
  implements complaintinterface
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.ENUM(...Object.values(complaintType)),
  })
  complaintType: complaintType;

  //========================= Many To Many Polymorphic =====================================
  @Column
  complaintId: number;

  @BelongsTo(() => Student, {
    foreignKey: "complaintId",
    constraints: false,
  })
  student?: Student;

  @BelongsTo(() => Teacher, {
    foreignKey: "complaintId",
    constraints: false,
  })
  teacher?: Teacher;

  //==========================================================================
  @Column
  complaintDetails: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
