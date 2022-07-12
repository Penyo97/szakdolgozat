import mongoose from "mongoose"
import ordersSchema from "./Orders";
import pubSchema from "./Pub";
import userSchema from "./User";


const orderSchema = mongoose.Schema({
    id: Number,
    User: userSchema,
    Pub: pubSchema,
    Orders: [ordersSchema],
    Order_date: Date,
    Status: String
})


export default orderSchema