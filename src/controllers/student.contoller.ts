import { Request, Response } from "express";

import Student from "../models/student";
import { Op } from "sequelize";

export const StudentDetails = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const data = await Student.create(req.body);
    res.send(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
