import express from "express";
import mongoose from "mongoose";
import {Order, User} from "./models.js"

const app = express();
app.use(express.json());
const port = 3000;

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

app.post("/insert/order", (req, res) => {
    const {userid, firstName, lastName, userName, email, poins} = req.body.User;
    let user = User.find({id: userid});
    if (user === undefined) {
        user = User.create({
            id: userid,
            First_Name: firstName,
            Last_Name: lastName,
            User_Name: userName,
            Email: email,
            Poins: poins
        });
    }
    const {id} = req.body
    const [{order}] = req.body.Rents;
    Order.create({
        id: id,
        User: {user},
        Rents: [
            {
                order: order
            }
        ],
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
