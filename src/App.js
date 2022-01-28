import Expenses from "./components/Expenses";
import expensesData from "./expensesData";

function App() {
  return (
    <div>
      <h2>Expense Tracker</h2>
      <Expenses data={expensesData} />
    </div>
  );
}

export default App;
