import { Request, Response } from "express";

import Teacher from "../models/teacher";
// import Course from "../models/course.model";
// import Enrollment from "../models/enrollment";
// import Professor from "../models/professor";
import { Op } from "sequelize";
console.log(Teacher);


export const TeacherDetails = async (req: Request, res: Response): Promise<any> => {
  try {
    const data = await Teacher.create(req.body);
    res.send(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//const t = await db.sequelize.transaction();
//     try {
//       let { search, column, sortDirection } = req.query;
//       const page = parseInt(req.query.page) || 1;
//       const limit = parseInt(req.query.limit) || 5;
//       const offset = (page - 1) * limit;
//       // const sortColumn=
//       const orderOption = column && sortDirection ? [[column, sortDirection]] : [];

//       let searchData;
//       let totalcount;

//       if (search) {
//         const searchTerms = search.split(" ");
//         searchData = await Student.findAndCountAll({
//           include: [
//             {
//               model: Enrollment,
//               include: [
//                 {
//                   model: Course,
//                   include: {
//                     model: Professor,
//                   },
//                 },
//               ],
//             },
//           ],
//           where: {
//             [Op.and]: searchTerms.map((term) => ({
//               [Op.or]: [
//                 sequelize.where(
//                   sequelize.fn("LOWER", sequelize.col("firstname")),
//                   "LIKE",
//                   `%${term.toLowerCase()}%`
//                 ),
//                 sequelize.where(
//                   sequelize.fn("LOWER", sequelize.col("lastname")),
//                   "LIKE",
//                   `%${term.toLowerCase()}%`
//                 ),
//                 sequelize.where(
//                   sequelize.fn("LOWER", sequelize.col("phone")),
//                   "LIKE",
//                   `%${term.toLowerCase()}%`
//                 ),
//               ],
//             })),
//           },
//           offset: offset,
//           limit: limit,
//           order: orderOption,
//         });

//         totalcount = searchData.count;
//         searchData = searchData.rows;
//       } else {
//         searchData = await Student.findAll({
//           include: [
//             {
//               model: Enrollment,
//               include: [
//                 {
//                   model: Course,
//                   include: {
//                     model: Professor,
//                   },
//                 },
//               ],
//             },
//           ],
//           offset: offset,
//           limit: limit,
//           order: orderOption,
//         });

//         totalcount = await Student.count();
//       }

//       res.json({ searchData, totalcount });
//     //   await t.commit();
//     } catch (error) {
//       res.status(500).json({ error: "Internal server error" });
//     //   await t.rollback();
//     }
// }
