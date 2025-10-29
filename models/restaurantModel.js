// path/restaurants

const dataRestaurants = [
    { name: "Margherita Pizza", price: 250 },
    { name: "Pepperoni Pizza", price: 280 },
    { name: "Pasta Carbonara", price: 220 },
    { name: "Tuna Roll", price: 120 },
    { name: "Ramen", price: 200 }
];

const restaurantModel = {
    getAllRestaurants: () => dataRestaurants,
};

module.exports = restaurantModel;