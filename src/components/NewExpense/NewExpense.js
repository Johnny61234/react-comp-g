import { useState } from 'react';
import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
  const [alertStatus, setAlertStatus] = useState(false);
  const [viewForm, setViewForm] = useState(false);


  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    if(!Object.values(expenseData).some(item => item === null || item === '')){
      hideForm();
      props.onAddExpense(expenseData);
    } else {
      showFormAlert();
    }
  };

  const showForm = () => {
    setViewForm(true);
  };

  const hideForm = () => {
    setViewForm(false);
    setAlertStatus(false);
  };

  const showFormAlert = () => {
    setAlertStatus(true);
  }

  return (
    <div className="new-expense">
      {viewForm === false ? (
        <button onClick={showForm}>Add New Expense</button>
      ) : (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideForm} onFormStatus={alertStatus}/>
      )}
    </div>
  );
}

export default NewExpense;
