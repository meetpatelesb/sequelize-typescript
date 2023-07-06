import { Request, Response } from "express";

import Course from "../models/course";
import Student from "../models/student";
import Teacher from "../models/teacher";
import CourseStudent from "../models/studentcourse";
import { Op } from "sequelize";

//========================================= Datas Added By Seeder In Table ============================== 

export const CourseDetails = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const data = await Course.bulkCreate(req.body);
    res.send(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//========================================= Many To Many Data Shows In Pivot Table ============================== 

export const CourseStudentDetails = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { count, rows } = await Course.findAndCountAll({
      attributes: ["name", "duration"],
      include: {
        model: Student,
        attributes: ["firstname", "lastname"],
      },
    });
   res.json({ count, rows });
  } catch (error) {
    console.log(error);
  }
};
