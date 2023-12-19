
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'my_pgdb',
    password: 'rgbXYZ@9182',
    port: 5432,
})

import express from 'express'
// require("dotenv").config();
const app = express()
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });
 
import { db} from '../Config/db.config'
import { router } from '../Routes/posts.routes'

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//routes
 app.use('/api/v1/posts', router)

//db connection then server connection
db.then(() => {
    app.listen(4040, () => console.log('Server is listening on port 4040'))
})



