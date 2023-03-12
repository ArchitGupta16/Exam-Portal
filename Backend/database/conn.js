/** It allows us to connect this express application with the mongodb database  */
import mongoose from "mongoose";

export default async function connect() { 
    await mongoose.connect(process.env.ATLAS_URL)
    console.log("Database Connected")
}
