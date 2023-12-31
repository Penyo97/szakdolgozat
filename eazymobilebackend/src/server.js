import express from "express";
import mongoose from "mongoose";
import {Order, User,Orders} from "./models.js"
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors())
const port = 4000;

const mongo_url = "mongodb://localhost:27017/eazy";

mongoose.connect(
    mongo_url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        console.log(err);
    }
);

app.get("/", (req, res) => {
    res.send("Eazy");
})

app.get("/getOrders",(req,res)=> {
    Orders.find({}, (err, orders) => {
        res.status(200).send(orders);
    },{limit:1});
})

app.get("/login",(req,res)=> {
    User.find({}, (err, users) => {
        res.status(200).send(users);
    });
})
app.post("/insert/order", async(req, res) => {
    const {userid, First_Name, Last_Name, User_Name, Email, Poins} = req.body.User;
    let user = await  User.findOne({id: userid}).select("id First_Name Last_Name User_Name Email Poins").lean();
    if (user == null) {
        User.create([{
            id: userid,
            First_Name: First_Name,
            Last_Name: Last_Name,
            User_Name: User_Name,
            Email: Email,
            Poins: Poins
        }]).then((result) => res.status(200).send(result))
            .catch((err) => res.status(400).send(err));
    }
    const {id} = req.body
    let orders = [];
    console.log(req.body.Rents)
    for (const index in req.body.Rents) {
        orders.push(req.body.Rents[index]);
    }
    Order.create({
        id: id,
        User: user,
        Rents: orders,
        Order_date: Date.now(),
        Status: "Pending"
    })
        .then(r => res.send(r))
        .catch(err => res.send(err));
});

mongoose.connection.once("open", () => {
    console.log("Mongodb connected");
});

app.listen(port, () => {
    console.log(`Eazy backend app listening at http://localhost:${port}`);
});


export default app;
