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
  var page: number = req.body.data.page || 1;
  var recordPerPage: number = req.body.data.recordPerPage || 2;
  var sortDirection: string = req.body.data.sortDirection;
  var sortField: string = req.body.data.sortField;
  var search: string = req.body.data.search;
  var tableName: string = req.body.data.tName;
  console.log(page, search, recordPerPage, sortDirection, sortField, tableName);

  if ((tableName === "Student")) {
    try {
      const count: number = 10;
      const rows = await Student.findAll({
        where: {
          [Op.or]: [
            // {
            //   "$Course.name$": {
            //     [Op.like]: "%" + search + "%",
            //   },
            // },

            {
              "$Student.firstname$": {
                [Op.like]: "%" + search + "%",
              },
            },
          ],
        },

        attributes: ["firstname", "lastname"],
        include: {
          model: Course,
          attributes: ["name", "duration"],
        },

        offset: (page - 1) * recordPerPage,
        limit: recordPerPage,
      });
      res.json({ count, rows });
    } catch (error) {
      console.log(error);
    }
  } else if (tableName === "Course") {
    try {
      const count: number = 10;
      const rows = await Course.findAll({
        // where: {
        //   [Op.or]: [
        //     // {
        //     //   "$Course.name$": {
        //     //     [Op.like]: "%" + search + "%",
        //     //   },
        //     // },

        //     {
        //       "$Student.firstname$": {
        //         [Op.like]: "%" + search + "%",
        //       },
        //     },
        //   ],
        // },

        attributes: ["name", "duration"],
        include: {
          model: Student,
          attributes: ["firstname", "lastname"],
        },

        offset: (page - 1) * recordPerPage,
        limit: recordPerPage,
      });
      res.json({ count, rows });
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("chgaggkjg");
  }
};
