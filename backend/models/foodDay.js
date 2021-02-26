const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DaySchema = new Schema({
  time: {
    type: String,
  },
  food: String,
});

const FoodDaySchema = new Schema({
  date: String,
  weight: Number,
  water: Number,
  coffeCup: Number,
  eats: [DaySchema],
});

const BDFoodDay = mongoose.model('days', FoodDaySchema);
module.exports = BDFoodDay;
