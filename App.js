import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth.routes.js'
import adminRouter from './routes/admin.routes.js'
import productRouter from './routes/product.routes.js'
import publicRouter from './routes/public.routes.js'
export const app = express()



app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

// routes
app.use('/api/v1/public', publicRouter)
app.use('/api/v1', authRouter,productRouter)
app.use('/back-office/access/admin', adminRouter)



