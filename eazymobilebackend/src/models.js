import mongoose from "mongoose"
import rentsSchema from "./schemas/Orders.js";
import pubSchema from "./schemas/Pub.js";
import orderSchema from "./schemas/Order.js";
import userSchema from "./schemas/User.js";

const Order = mongoose.model("Order", orderSchema);
const Pub = mongoose.model("Pub", pubSchema);
const User = mongoose.model("User", userSchema);
const Orders = mongoose.model("Orders", rentsSchema);

export {Orders, User, Pub, Order};