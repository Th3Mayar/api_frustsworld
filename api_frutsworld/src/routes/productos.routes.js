import { Router } from "express";
import { getProducts, createProduct, updateProduct, deleteProduct, getProduct} from '../controllers/productos.controller.js'

const router =  Router()

router.get('/Productos', getProducts)

router.get('/Productos/:id', getProduct)

router.post('/Productos', createProduct)

router.patch('/Productos/:id', updateProduct)

router.delete('/Productos/:id', deleteProduct)

export default router