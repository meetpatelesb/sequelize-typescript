import { Router } from "express";
import {
  ComplaintsDetails,
  
} from "../controllers/compaint.controller";
const router = Router();

router.get("/show", ComplaintsDetails);
// router.get("/show", CourseStudentDetails);

export default router;
