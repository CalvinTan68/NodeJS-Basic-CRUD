import express from "express";
import {
  getData,
  getDataById,
  createData,
  updateData,
  deleteData,
} from "../controllers/DataController.js";

const router = express.Router();

router.get("/", getData);
router.get("/:id", getDataById);
router.post("/", createData);
router.put("/:id", updateData);
router.delete("/:id", deleteData);

export default router;
