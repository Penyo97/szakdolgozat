import mongoose from "mongoose"
import ordersSchema from "./schemas/Orders";
import pubSchema from "./schemas/Pub";
import orderSchema from "./schemas/Order";
import userSchema from "./schemas/User";

const Order = mongoose.model("Order",orderSchema);
const Orders = mongoose.model("Orders",ordersSchema);
const Pub = mongoose.model("Pub",pubSchema);
const User = mongoose.model("User",userSchema);


export {Orders, User, Pub, Order};