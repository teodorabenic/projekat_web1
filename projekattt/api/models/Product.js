const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: { type: String },
    desc: { type: String },
    img: { type: String },
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    type: { type: String },
    price: { type: Number },
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);