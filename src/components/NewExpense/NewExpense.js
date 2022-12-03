import { useState } from 'react';
import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    hideForm();
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
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
