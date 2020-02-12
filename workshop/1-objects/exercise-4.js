// Exercise 4
// -------------------

var foodPairings = {
    burgers: 'beer',
    fish: 'white wine',
    beef: 'red wine',
    strawberries: 'cream'
};

// We have an Object that contains food pairings so that our sommelier can make
// educated recommendations. What we need is an Array that only holds all the foods.

// 6.1. Write a script that will print out all foods in the object.
Object.keys(foodPairings);

// 6.2 Write a script that outputs each key/value pair to the console a sentence like this:
// "With <FOOD_ITEM>, it is best to have <BEVERAGE>."
let food = Object.keys(foodPairings);
let beverage = Object.values(foodPairings);
let i=0;

food.forEach((x) => {
    console.log(`With ${food[i]}, it is best to have ${beverage[i]}. \n`);
    i++
})
