import React from 'react';
import { useDispatch } from 'react-redux';
import { editWater, editWeight } from '../../redux/foodReducer';
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

  const handleChangeWeight = (e) =>
    dispatch(
      editWeight({
        date,
        weight: e.target.value,
      })
      // payload for ED1IT WEIGHT
    );

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
  // const coffe =
  // const eats =
  return (
    <div className={'food_form__edit-day'}>
      {wightForm}
      {waterForm}
    </div>
  );
}
