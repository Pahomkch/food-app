const { createSlice } = require('@reduxjs/toolkit');
const fake_day = {
  date: '',
  weight: 0,
  water: 0,
  coffeCup: 0,
  eats: [
    {
      time: 'first',
      food: 'макарошки с котлеткой',
    },
    {
      time: 'second...',
      food: 'творог',
    },
  ],
};

const eighteenDay = {
  date: '18.12.2020',
  weight: 72,
  water: 3,
  coffeCup: 2,
  eats: [
    {
      time: '08:00',
      food: 'delicious breakfast',
    },
    {
      time: '12:00',
      food:
        'lunch. It was so taste and i have many energy for my life and my body have some profit',
    },
    {
      time: '16:00',
      food: 'light snacks',
    },
    {
      time: '20:00',
      food: 'delicious diner(or not) with not hard things. Vegetable',
    },
  ],
};

const initialStateArray = [eighteenDay];

export const foodSlice = createSlice({
  name: 'FOOD_DAY_ARRAY',
  initialState: initialStateArray,
  reducers: {
    editDate: (state, action) => (state.date = action.payload),
    //think when i press submit in reducer filter array with data

    editWeight: (state, action) => {
      const myIndex = state.findIndex((day) => day.date === action.payload.date);
      //can happiness change value from not exist data-form

      return void (state[myIndex].weight = action.payload.weight);
    },
    editWater: (state, action) =>
      void (state[action.payload.indexAC].water = action.payload.amount),
    editCoffeCup: (state, action) =>
      void (state[action.payload.indexAC].coffeCup = action.payload.amount),
    addEat: (state, action) => state.eats.push(action.payload),

    createNewDay: (state, action) => void state.push({ ...fake_day, date: action.payload }),
  },
});

export const {
  editDate,
  editWeight,
  editWater,
  editCoffeCup,
  addEat,
  createNewDay,
} = foodSlice.actions;
