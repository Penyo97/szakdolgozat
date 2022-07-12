import mongoose from "mongoose"


const pubSchema = mongoose.Schema({
    id: Number,
    Name: String,
    Description: String,
    Location: String,
    Open: Number,
    Close: Number,
    Star: Number
})

export default pubSchema;