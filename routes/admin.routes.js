import express from 'express'
import { allUser, allProduct, userPorfile } from '../controller/admin.controller.js'

const router = express.Router()


router.get('/client', allUser)
router.get('/all_product', allProduct)
router.get('/user', userPorfile)

export default router