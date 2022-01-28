import ExpenseItem from "./components/ExpenseItem";
import expensesData from "./components/expenses";

function App() {
  return (
    <div>
      <h1>Expense Tracker</h1>
      {expensesData.map((expense) => {
        return <ExpenseItem {...expense} />;
      })}
    </div>
  );
}

export default App;
