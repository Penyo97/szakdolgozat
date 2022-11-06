import mongoose from "mongoose"
import rentsSchema from "./Orders.js";
import pubSchema from "./Pub.js";
import userSchema from "./User.js";


const orderSchema = mongoose.Schema({
    id: Number,
    User: userSchema,
    Pub: pubSchema,
    Rents: [rentsSchema],
    Order_date: Date,
    Status: String
})


export default orderSchema