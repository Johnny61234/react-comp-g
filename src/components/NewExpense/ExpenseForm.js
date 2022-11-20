import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData); //this takes our expenseData
    //and add its to the onSaveExpenseData function in our parent, NewExpense.js

    setEnteredTitle(''); //this is an exmaple of 2 way binding
    setEnteredAmount(''); //below we use our useState to set values to inputs
    setEnteredDate(''); //when we submit, the values are entered into the expense data above
    //we use the useState again to set those values to blank ones
    //to do this we must set a value parameter in our input field
    //and set that value to our 'entered<Value>' we defined above

    console.log(expenseData);
  };

  const onTitleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const onAmountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const onDateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={onTitleChangeHandler}
            value={enteredTitle}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={onAmountChangeHandler}
            value={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={onDateChangeHandler}
            value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
