import React from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
  const onFilterChangeHandler = (e) => {
    props.onFilterChange(e.target.value)
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="">Filter by year</label>
        <select onChange={onFilterChangeHandler} value={props.selected} name="year" id="year">
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
