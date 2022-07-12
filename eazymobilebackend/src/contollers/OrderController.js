import app from "../server"
import {Order} from "../models";


app.get("/getOrders",(req, res) => {
    Order.find({}, (err, orders) => {
        res.status(200).send(orders);
    });
})