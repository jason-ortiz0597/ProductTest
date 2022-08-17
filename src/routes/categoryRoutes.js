import { Router } from "express";


import { createCategory, deleteCategory,getAllCategory, updateCategory } from "../controllers/categoryControllers.js";


const router = Router();

router.post("/createCategory", createCategory);
router.delete("/deleteCategory/:id", deleteCategory);
router.get("/listCategory", getAllCategory);
router.put("/updateCategory/:id", updateCategory);

export default router;