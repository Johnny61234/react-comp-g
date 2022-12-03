import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
  let expensesContent = <p>No expeses found.</p>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id} //key is a special string attribute needed to be included when creating lists of elements
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
