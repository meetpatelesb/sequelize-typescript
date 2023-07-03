import { Router } from "express";
import { TeacherDetails } from "../controllers/teacher.controller";
const router = Router();

router.post("/add", TeacherDetails);
//router.get('/addstudent',StudentDetails);
export default router;
