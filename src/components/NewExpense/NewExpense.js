import { useState } from 'react';
import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    if(!Object.values(expenseData).some(item => item === null || item === '')){
      hideForm();
      props.onAddExpense(expenseData);
      console.log('hideform');
    } else {
      alert('please fill out form')
    }
  };

  const [viewForm, setViewForm] = useState(false);

  const showForm = () => {
    setViewForm(true);
  };

  const hideForm = () => {
    setViewForm(false);
  };

  return (
    <div className="new-expense">
      {viewForm === false ? (
        <button onClick={showForm}>Add New Expense</button>
      ) : (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideForm}/>
      )}
    </div>
  );
}

export default NewExpense;
