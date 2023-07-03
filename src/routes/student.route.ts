import { Router } from "express";
import { StudentDetails } from "../controllers/student.contoller";
const router = Router();

router.post("/add", StudentDetails);
//router.get('/addstudent',StudentDetails);
export default router;



// // import { Router } from "express";
// // import { StudentDetails } from "../controllers/student.controller";
// // const router=Router();

// // router.post('/addstudent',StudentDetails);

// // module.exports=router;