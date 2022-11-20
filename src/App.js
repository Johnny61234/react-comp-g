import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 249.81, date: new Date(2021, 2, 14) },
    { title: "Grocereis", amount: 187.21, date: new Date(2020, 13, 2) },
    { title: "Phone", amount: 978.24, date: new Date(2022, 30, 9) },
    { title: "House Insurance", amount: 101.23, date: new Date(2021, 22, 21) },
  ];

  const addExpenseHandler = (expense) => { //this finally takes our expense data
    console.log("In App.js"); //which started at our ExpenseForm, then to our NewExpense,
    console.log(expense); //now finally to our App in order to add it to our expenses object
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
