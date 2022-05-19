const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");


dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("DB connection success")
    })
    .catch((err) => {
        console.log(err);
    });

app.use(express.json());

app.use(function(req, res, next) {
    // Allow access request from any computers
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE,PATCH');
    res.header('Access-Control-Allow-Credentials', true);
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("backend server is running!");
});