import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

function Expenses(props) {
  //notes
  //'selected={filteredYear}' is passed in from our expenseFilter
  //we set it with our useState above
  //in our ExpenseFilter file, we set the value of our input to
  //'props.selected' which takes the filteredYear here
  //and set the value of the dropdown box to that date on load
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

    console.log(selectedYear);
  };

  const filteredExpense = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onFilterChange={filterChangedHandler}
          selected={filteredYear}
        />
        <ExpensesList items={filteredExpense}/>
      </Card>
    </div>
  );
}

export default Expenses;
