import { Router } from "express";
import { CourseDetails, CourseStudentDetails, GetCourseStudentDetails } from "../controllers/course.controller";
const router = Router();

router.post("/add", CourseDetails);
router.post("/show", CourseStudentDetails);
router.post("/showdata", GetCourseStudentDetails);

export default router;
