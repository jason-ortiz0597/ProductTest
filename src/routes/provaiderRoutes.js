import { Router } from "express";

import { createProvaider, deleteProvaider, getAllProvaiders, updateProvaider } from "../controllers/provaiderControllers.js";


const router = Router();

router.post("/createProvaider", createProvaider);
router.delete("/deleteProvaider/:id", deleteProvaider);
router.get("/listProvaiders", getAllProvaiders);
router.put("/updateProvaider/:id", updateProvaider);

export default router;

