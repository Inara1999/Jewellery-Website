import express from 'express'
import { addProduct, getProduct, updateProduct } from '../controller/product.controller.js'

const router = express.Router()


router.get('/new_product', addProduct)
router.get('/all_product', getProduct)
router.get('/update_product', updateProduct)

export default router