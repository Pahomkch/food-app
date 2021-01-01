import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import FoodForm from './Components/FoodForm/FoodForm';

export default function App(props) {
  const daysOfFood = useSelector((state) => state.daysFood);
  return (
    <div className='App'>
      <h4>Length array: {daysOfFood.length}</h4>
      <FoodForm />
    </div>
  );
}

const DayInfo = (props) => {
  const { date, weight, water, coffeCup, eat } = props.day;
  return <div>Date of day: {date}</div>;
};
