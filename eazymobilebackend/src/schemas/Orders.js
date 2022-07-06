import mongoose from "mongoose"


const ordersSchema = mongoose.Schema({
    id: Number,
    Name: String,
    Count: Number,
    Price: Number
})

export default ordersSchema;