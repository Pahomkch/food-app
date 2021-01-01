import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewDay, editWeight } from '../../redux/foodReducer';
import { EditDayInputs } from './EditDayInputs';

const _checkDateHaveTwoDigits = (arrStr) => arrStr.map((d) => (d.length > 1 ? d : '0' + d));

const _searchDateWhichEdit = (days, dateYMD) => {
  const [editDayYear, editDayMonth, editDayDay] = dateYMD.split('-');
  const formatDateFromState = `${editDayDay}.${editDayMonth}.${editDayYear}`;
  return days.filter((day) => day.date === formatDateFromState)[0] || {};
};

const FoodForm = () => {
  const dispatch = useDispatch();
  const daysFood = useSelector((state) => state.daysFood);
  const [nowMonth, nowDate, nowYear] = _checkDateHaveTwoDigits(
    new Date().toLocaleDateString('en-US').split('/')
  );

  console.log(`Year: ${nowYear} / Month: ${nowMonth} / Day: ${nowDate}`);
  const [editDayData, setEditDayData] = useState(`${nowYear}-${nowMonth}-${nowDate}`);

  const [dayInfo, setDayInfo] = useState(_searchDateWhichEdit(daysFood, editDayData));

  let indexDayWhichWeWork = daysFood.findIndex((element) => element.date === dayInfo.date);

  useEffect(() => {
    setDayInfo(_searchDateWhichEdit(daysFood, editDayData));
  }, [daysFood, editDayData]);

  useEffect(() => {
    //for create new post in state if this data has not
    if (indexDayWhichWeWork < 0) {
      const [y, m, d] = editDayData.split('-');
      dispatch(createNewDay(`${d}.${m}.${y}`));
    }
  }, [indexDayWhichWeWork]);

  // EVENTS
  const handleChangeDate = (e) => {
    // change event in reducer. Edit other date
    // event yyyy-mm-dd
    setEditDayData(e.target.value);
  };
  const handleSubmitClick = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <h3>{JSON.stringify(dayInfo)}</h3>
      <h1>index of array: {indexDayWhichWeWork}</h1>
      <h2 className='food_form__title'>What is you ate today</h2>
      <div className='food_form__date'>
        <label>
          Date:
          <input
            type='date'
            value={editDayData}
            // 2020-12-23
            onChange={handleChangeDate}
          />
        </label>
      </div>

      <EditDayInputs editDay={dayInfo} indexAC={indexDayWhichWeWork} />

      <button className='food_form__btn' onClick={handleSubmitClick}>
        Submit
      </button>
    </form>
  );
};

export default FoodForm;
