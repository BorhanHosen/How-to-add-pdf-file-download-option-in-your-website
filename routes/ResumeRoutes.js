import express from "express";
import ResumeController from "../controllers/ResumeControllers.js";
const router = express.Router();

router.get("/GetPDF", ResumeController.generatePDF);
router.get("/downloadHome", ResumeController.downloadHome);

export default router;
