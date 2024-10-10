const mongoose = require("mongoose");

//Schema
const CrudSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

//model
const Crud = mongoose.model("Crud", CrudSchema);
module.exports = Crud;
