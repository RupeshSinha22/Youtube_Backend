// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"
import conntectDB from "./db/db_connect.js";
import { app } from "./app.js";

dotenv.config({
    path:'./env'
})

conntectDB()
.then(()=>{
    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`Server is running at port ${process.env.PORT}`)
    })
})
.catch(err=>{
    console.log("Mongo db connection failed!!!", err);
})