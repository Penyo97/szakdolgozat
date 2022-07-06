import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    id: Number,
    First_Name: String,
    Last_Name: String,
    User_Name: String,
    Email: String,
    Poins: Number
})

export default userSchema;