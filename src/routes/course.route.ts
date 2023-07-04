import { Router } from "express";
import { CourseDetails, CourseStudentDetails } from "../controllers/course.controller";
const router = Router();

router.post("/add", CourseDetails);
router.get("/show", CourseStudentDetails);

export default router;
