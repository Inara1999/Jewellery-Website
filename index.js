import {app} from './App.js'
import { config } from 'dotenv'
import { database } from './config/database.js'

config()
database()


app.listen(4000,()=>console.log('server running 4000'))