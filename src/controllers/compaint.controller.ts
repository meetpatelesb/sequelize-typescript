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
    const { count, rows } = await Complaint.findAndCountAll({
      include: {
        model: Student,
      },
      // where: {
      //   complaintType: "STUDENT",
      // },
    });
    
     res.json({ count, rows });
  } catch (error) {
    console.log(error);
  }
};
