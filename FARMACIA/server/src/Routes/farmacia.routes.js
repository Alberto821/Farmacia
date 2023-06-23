import { Router } from "express";
import {
  getItems,
  getReport,
  getStatus,
  getRegister,
} from "../Controllers/farmacia.controllers.js";

const router = Router();

router.get("/items", getItems);
router.get("/status", getStatus);

router.get("/report", getReport);
router.get("/registro", getRegister);

export default router;
