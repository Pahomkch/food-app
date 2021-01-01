import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editCoffeCup } from '../../redux/foodReducer';

export const CupsAmounter = (props) => {
  const { indexAC, title, cupCount, allCount, actionCreator } = props;
  const dispatch = useDispatch();

  const handleChangeSelect = (e) => {
    dispatch(
      actionCreator({
        indexAC,
        water: e.target.value,
      })
    );
  };

  return (
    <div>
      <label>
        <b>{title}</b>
        <select value={cupCount} onChange={handleChangeSelect}>
          {[...new Array(allCount)].map((v, i) => (
            <MyOptions value={i} name={i} />
          ))}
        </select>
      </label>
    </div>
  );
};

const MyOptions = (props) => <option value={props.value}>{props.name}</option>;
