const restaurantModel = require("../models/restaurantModel");


const handleGetRestaurants = (req, res) => {
    const restaurantData = restaurantModel.getAllRestaurants();
    res.json(restaurantData);
};

const restaurantController = {
    handleGetRestaurants,
};

module.exports = restaurantController;