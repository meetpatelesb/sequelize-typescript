import { Router } from "express";
import {
  ClassDetails,
  ClassStudentDetails,
} from "../controllers/class.controller";
const router = Router();

router.post("/add", ClassDetails);
router.get("/show", ClassStudentDetails);

export default router;
 