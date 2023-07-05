import { Request, Response } from "express";

import Class from "../models/class";
import { Op } from "sequelize";
import Student from "@/models/student";
import Attendance from "@/models/attendance";
import Teacher from "@/models/teacher";



export const AttendanceStudentDetails = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const data = await Attendance.findAll({
      include: {
        model: Student,
      },
      where: {
        // [Op.and]: [
           attendanceType: "STUDENT" ,
          // { attendanceDate: "03-07-2023" },
        // ],
      },
    });
    res.send(data);
    console.log(data.length);
  } catch (error) {
    console.log(error);
  }
};


export const AttendanceTeacherDetails = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const data = await Attendance.findAll({
      include: {
        model: Teacher,
      },
      where: {
        [Op.and]: [
      {attendanceType: "TEACHER",},
      {attendanceId:'1'}
        // { attendanceDate: "03-07-2023" },
        ],
      },
    });
    res.send(data);
    console.log(data.length);
  } catch (error) {
    console.log(error);
  }
};
