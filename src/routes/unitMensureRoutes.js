import { Router } from "express";

import { createUnitMensure, getAllUnitMensures, deleteUnitMensure, updateUnitMensure } from "../controllers/unitMensureControllers.js";

const router = Router();

router.post("/createUnit", createUnitMensure);
router.get("/listUnit", getAllUnitMensures);
router.delete("/deleteUnit/:id", deleteUnitMensure);
router.put("/updateUnit/:id", updateUnitMensure);

export default router;