const mongoose = require("mongoose");

const FoodSchema = {
  name: {
    type: String,
    required: [true, "Name is required"],
    minLength: [3, "Name must be at least 3 characters"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
    enum: [
      "Brekfast",
      "Lunch",
      "Dinner",
      "Dessert",
      "Vegan",
      "Vegetarian",
    ],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minLength: [3, "Description must be at least 3 characters"],
  },
  quantity: {
    type: String,
    required: [true, "Quantity is required"],
  },
calories: {
    type: String,
},
  // Foregin Key
  // createdBy: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  // },

  imgPath: {
    type: String,
    default:
      "https://appfood.co/foodordering/img/bg/defimage.jpg",
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be negative"],
  },
};

module.exports = mongoose.model("Food", FoodSchema);
