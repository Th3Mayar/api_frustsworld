import { Router } from "express";
import { getProduct } from '../controllers/productos.controller.js'
import { createProduct } from "../controllers/productos.controller.js";
import { updateProduct } from "../controllers/productos.controller.js";
import { deleteProduct } from "../controllers/productos.controller.js";

const router =  Router()

router.get('/Productos', getProduct)

router.post('/Productos', createProduct)

router.put('/Productos', updateProduct)

router.delete('/Productos', deleteProduct)

export default router