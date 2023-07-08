import { Router } from "express";
import {
  ComplaintsDetails,
  
} from "../controllers/compaint.controller";
const router = Router();

router.post("/show", ComplaintsDetails);
// router.get("/show", CourseStudentDetails);

export default router;
