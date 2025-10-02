import express from "express"
const router = express.Router();
import { getAllProducts, createProduct, deleteProduct, editProduct } from "../controllers/product.controller.js";


// Get All Products
router.get("/", getAllProducts)

/* CREATING PRODUCT */
router.post("/", createProduct);

// DELETE PRODUCT
router.delete("/:id", deleteProduct);

// EDIT PRODUCT
router.put("/:id", editProduct)


export default router;