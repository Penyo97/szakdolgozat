import express from "express";
import mongoose from "mongoose";

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

mongoose.connection.once("open", () => {
    console.log("Mongodb connected");
});

app.listen(port, () => {
    console.log(`Eazy backend app listening at http://localhost:${port}`);
});


export default app;
