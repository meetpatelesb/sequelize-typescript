import { Router } from "express";
import { AttendanceStudentDetails,AttendanceTeacherDetails } from "../controllers/attendance.controller";

const router = Router();
router.get("/student/show", AttendanceStudentDetails);
router.get("/teacher/show", AttendanceTeacherDetails);

export default router;
