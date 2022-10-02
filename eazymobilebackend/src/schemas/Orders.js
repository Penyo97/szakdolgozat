import mongoose from "mongoose"


const rentsSchema = mongoose.Schema({
    id: Number,
    Name: String,
    Count: Number,
    Price: Number
})

export default rentsSchema;