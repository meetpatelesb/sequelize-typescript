import { Request, Response } from "express";

import Class from "../models/class";
import { Op } from "sequelize";
import Student from "@/models/student";
import Complaint from "@/models/complaint";

export const ComplaintsDetails = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const data = await Complaint.findAll({
      include: {
        model: Student,
      },
      where: {
        complaintType:"STUDENT"
      },
    });
    res.send(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
