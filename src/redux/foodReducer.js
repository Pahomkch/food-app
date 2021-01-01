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
      time: 'first',
      food: 'макарошки с котлеткой',
    },
    {
      time: 'second...',
      food: 'творог',
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
    editWater: (state, action) => void (state[action.payload.indexAC].water = action.payload.water),
    editCoffeCup: (state, action) =>
      void (state[action.payload.index].coffeCup = action.payload.cups),
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
