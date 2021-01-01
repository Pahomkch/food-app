import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editCoffeCup, editWater, editWeight } from '../../redux/foodReducer';
import { CupsAmounter } from './CupsAmounter';

export function EditDayInputs(props) {
  // date: `${day}.${month}.${year}`,
  // weight: 77,
  // water: 2.0,
  // coffeCup: 2,
  // eats: [
  //   {
  //     time: '08:20',
  //     food: 'макарошки с котлеткой',
  //   },
  //   {
  //     time: '18:20',
  //     food: 'творог',
  //   },
  // ],
  const { indexAC, editDay } = props;
  const { date, weight, water, coffeCup, eats } = editDay;
  const dispatch = useDispatch();

  const [arrayAte, setArrayAte] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
  });

  const handleChangeWeight = (e) =>
    dispatch(
      editWeight({
        date,
        weight: e.target.value,
      })
      // payload for ED1IT WEIGHT
    );
  const handleChangeTextFirstFood = (e) => setArrayAte({ ...arrayAte, 1: e.target.value });

  // for renders
  const wightForm = (
    <div className='food_form__weight'>
      <label>
        Weight:
        <input type='number' value={weight} onChange={handleChangeWeight} />
      </label>
    </div>
  );

  const waterForm = (
    <div className='food_form__water'>
      <CupsAmounter
        title={`Water cups`}
        allCount={8}
        cupCount={water}
        actionCreator={editWater}
        indexAC={indexAC}
      />
    </div>
  );
  const coffeForm = (
    <div className='food_form__coffe'>
      <CupsAmounter
        title={`Coffe cups`}
        allCount={8}
        cupCount={coffeCup}
        actionCreator={editCoffeCup}
        indexAC={indexAC}
      />
    </div>
  );

  // const eats =
  return (
    <div className={'food_form__edit-day'}>
      {wightForm}
      {waterForm}
      {coffeForm}
      <fieldset className='food_form__ate'>
        <div className='food_form__ate__second'>
          <input type='time' onChange={(e) => console.log(e.target.value)} />
          <textarea name='second-ate' onChange={handleChangeTextFirstFood} />
        </div>
      </fieldset>
    </div>
  );
}
