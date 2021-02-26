const express = require("express");
const Router = express.Router;
const BDFoodDa = require("../models/foodDay");

const router = Router();

const FAKE = {
  date: "14.01.2021",
  weight: 76,
  literOfWater: 3,
  coffeCups: 2,
  eatsList: [
    {
      time: "08:00",
      food: "delicious breakfast",
    },
    {
      time: "12:00",
      food:
        "lunch. It was so taste and i have many energy for my life and my body have some profit",
    },
    {
      time: "16:00",
      food: "light snacks",
    },
    {
      time: "20:00",
      food: "delicious diner(or not) with not hard things. Vegetable",
    },
  ],
};

router.get("/", async (req, res, next) => {
  console.log(`its all what i have its: GETS`);
  await BDFoodDa.create(FAKE);
});

router.post(`/`, async (req, res, next) => {
  console.log(`its all what i have its: POST`);
  console.log("req:");
  console.log(req);
  console.log("res");
  console.log(res);
});

module.exports = router;
