const Food = require("../models/food.model");
// const jwt = require("jsonwebtoken");
// const SECRET = 'supersecret';

/* Create Food */
const createFood = (req, res)=>{
    // const user = jwt.verify(req.cookies.userToken, SECRET);
    // {...req.body, createdBy: user._id}
    Food.create(req.body)
    .then((newFood) =>{
        console.log(newFood);
        res.json(newFood);
    })
    .catch((err) => {
        res.status(400).json({err});
});
}
/* Display ALL Foods */
const getAllFoods = (req, res) => {
    //Food.find({}).populate('createdBy', 'username email')
    Food.find()
    .then((allFoods) =>{
        res.json(allFoods);
    })
    .catch((err) => {
        res.status(400).json({err});
    });
}

/* Details for ONE Food */
const getOneFood = (req, res) =>{
    Food.findOne({ _id: req.params.id })
    .then((oneFood) => {
        console.log(oneFood);
      res.json(oneFood);
    })
    .catch((err) => {
        res.status(400).json({err});
    });
}
/*Update/EDIT Food */
const updateFood = (req, res) => {
    Food.findOneAndUpdate({ id: req.params.id },req.body, {
            new: true,
            runValidators: true
    })
    .then((updatedFood) => {
        res.json(updatedFood);
    })
    .catch((err) => {
        res.status(400).json({ err });
      });
}


//Delete Food
const deleteFood = (req, res) => {
    Food.deleteOne({ _id: req.params.id })
    .then((deletedFood) => {
        res.json({ deletedFood });
    })
    .catch((err) => {
        res.status(400).json({ err });
      });
}


module.exports = { createFood, getAllFoods , getOneFood, updateFood, deleteFood};