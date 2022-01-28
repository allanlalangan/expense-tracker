import ExpenseItem from "./components/ExpenseItem";
import expenses from "./components/expenses";

function App() {
  return (
    <div>
      <h1>Expense Tracker</h1>
      {expenses.map((expense) => {
        return <ExpenseItem {...expense} />;
      })}
    </div>
  );
}

export default App;
