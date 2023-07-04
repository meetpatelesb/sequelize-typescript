import { Router } from "express";
import { ReportCardDataDetails, ReportCardDetails } from "../controllers/reportcard.contoller";
const router = Router();

router.post("/add", ReportCardDetails);
router.get("/show", ReportCardDataDetails);



export default router;
