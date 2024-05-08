import express from "express";
import {
  employerGetAllApplications,
  jobseekerDeleteApplication,
  jobseekerGetAllApplications,
  postApplication,
} from "../controllers/applicationController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/postapplication", isAuthenticated, postApplication);
router.get("/employer/getallapplications", isAuthenticated, employerGetAllApplications);
router.get("/jobseeker/getallapplications", isAuthenticated, jobseekerGetAllApplications);
router.delete("/deleteapplication/:id", isAuthenticated, jobseekerDeleteApplication);

export default router;
