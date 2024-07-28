import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const conntectDB = async () => {
    try{
        const conntectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB host:${conntectionInstance.connection.host}`);
    } catch(err){
        console.log("MONGODB connection error",err);
        process.exit(1);
    }
}

export default conntectDB;