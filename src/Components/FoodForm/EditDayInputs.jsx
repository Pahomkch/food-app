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
  const handleChangeTextSecondFood = (e) => setArrayAte({ ...arrayAte, 2: e.target.value });
  const handleChangeTextThirdFood = (e) => setArrayAte({ ...arrayAte, 3: e.target.value });
  const handleChangeTextFourFood = (e) => setArrayAte({ ...arrayAte, 4: e.target.value });

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
      <div>
        <fieldset className='food_form__ate'>
          <div className='food_form__ate__first'>
            <input
              type='time'
              name='time-first-ate'
              onChange={(e) => console.log(e.target.value)}
            />
            <textarea name='first-ate' onChange={handleChangeTextFirstFood} />
          </div>
          <div className='food_form__ate_second'>
            <input type='time' name='time-second-ate' />
            <textarea name='food-second-ate' onChange={handleChangeTextSecondFood} />
          </div>
          <div className='food_form__ate_third'>
            <input type='time' name='time-third-ate' />
            <textarea name='food-third-ate' />
          </div>
          <div className='food_form__ate_four'>
            <input type='time' name='time-four-ate' />
            <textarea name='food-four-ate' />
          </div>
        </fieldset>
      </div>
    </div>
  );
}
