const foodController = require('../controllers/food.controller');

module.exports = (app) =>{
    app.post("/api/food", foodController.createFood);
    app.get("/api/food", foodController.getAllFoods);
    app.get("/api/food/:id", foodController.getOneFood);
    app.put("/api/food/:id", foodController.updateFood);
    app.delete("/api/food/:id", foodController.deleteFood);
}