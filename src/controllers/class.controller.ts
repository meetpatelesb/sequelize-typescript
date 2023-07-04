import { Request, Response } from "express";

import Class from "../models/class";
import { Op } from "sequelize";
import Student from "@/models/student";

export const ClassDetails = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const data = await Class.bulkCreate(req.body);
    res.send(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const ClassStudentDetails = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const data = await Student.findAll({
      include: {
        model: Class,
      },
    });
    res.send(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
