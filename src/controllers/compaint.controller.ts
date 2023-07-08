import { Request, Response } from "express";

import Class from "../models/class";
import { Op } from "sequelize";
import Student from "@/models/student";
import Complaint from "@/models/complaint";

export const ComplaintsDetails = async (
  req: Request,
  res: Response
): Promise<any> => {
  // var params:object = {
  var page: number = req.body.data.page || 1;
  var recordPerPage: number = req.body.data.recordPerPage || 2;
  var sortDirection: string = req.body.data.sortDirection;
  var sortField: string = req.body.data.sortField;
  var search: string = req.body.data.search;
  // };

  try {
    var order1 = [];
    var table: string = "Students";

    switch (sortField) {
      // case "complaintDetails":
      //   order1 = [[ sortField, sortDirection]];
      //   break;
      // case "complaintType":
      // order1 = [[ sortField, sortDirection]];
      //   break;
      case "name":
        order1 = [["Students", sortField, sortDirection]];
        break;
      default:
        break;
    }
    const { count, rows } = await Complaint.findAndCountAll({
      where: {
        [Op.or]: [
          {
            "$Complaint.complaintDetails$": {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            "$Complaint.complaintType$": {
              [Op.like]: "%" + search + "%",
            },
          },

          {
            "$student.firstname$": {
              [Op.like]: "%" + search + "%",
            },
          },
        ],
      },
      include: {
        model: Student,
      },
      // where: {
      //   complaintType: "STUDENT",
      // },

      offset: (page - 1) * recordPerPage,

      limit: recordPerPage,

      order: [...order1],

      // order: [, sortField, sortDirection],
    });
    console.log(count);

    res.json({ count, rows });
  } catch (error) {
    console.log(error);
  }
};
