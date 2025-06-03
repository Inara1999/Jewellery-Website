import express from 'express'
import { offer, discount, sale } from '../controller/public.controller.js'

const router = express.Router()


router.get('/sale', sale)
router.get('/product_discount', discount)
router.get('/new_offer', offer)

export default router