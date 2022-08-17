import { Router } from "express";

import { createProduct, getAllProducts, deleteProduct, updateProduct } from "../controllers/productController.js";

const router = Router();

router.post("/createProduct", createProduct);
router.get("/listProduct", getAllProducts);
router.delete("/deleteProduct/:id", deleteProduct);
router.put("/updateProduct/:id", updateProduct);

export default router;