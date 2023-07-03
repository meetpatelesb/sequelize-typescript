import { Request, Response } from "express";

import Course from "../models/course";
import { Op } from "sequelize";

export const CourseDetails = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const data = await Course.create(req.body);
    res.send(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
