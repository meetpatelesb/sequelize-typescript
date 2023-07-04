import { Request, Response } from "express";

// import Course from "../models/course";
// import Student from "../models/student";
// import Teacher from "../models/teacher";
// import CourseStudent from "../models/studentcourse";
import ReportCard from '../models/reportcard';
import { Op } from "sequelize";
import Student from "@/models/student";

export const ReportCardDetails = async (req: Request, res: Response): Promise<any> => {
  try {
    const data = await ReportCard.create(req.body);
    res.send(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};



export const ReportCardDataDetails = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const data = await ReportCard.findAll({
      include: {
        model: Student,
      },
    });
    res.send(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
