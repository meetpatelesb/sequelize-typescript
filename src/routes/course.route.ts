import { Router } from "express";
import { CourseDetails } from "../controllers/course.controller";
const router = Router();

router.post("/add", CourseDetails);
//router.get('/addstudent',StudentDetails);
export default router;
