import { Router } from "express";
import {  createStatu, deleteStatu, getAllStatu, updateStatu } from "../controllers/statuControllers.js";


const router = Router();

router.post("/createStatu", createStatu);
router.delete("/deleteStatu/:id", deleteStatu);
router.get("/listStatu", getAllStatu);
router.put("/updateStatu/:id", updateStatu);


export default router;