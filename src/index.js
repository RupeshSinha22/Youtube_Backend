// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"
import conntectDB from "./db/db_connect.js";

dotenv.config({
    path:'./env'
})

conntectDB()