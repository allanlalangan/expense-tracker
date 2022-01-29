import Expenses from "./components/Expenses/Expenses";
import expensesData from "./expensesData";

const App = () => {
  return (
    <div>
      <h2>Expense Tracker</h2>
      <Expenses data={expensesData} />
    </div>
  );
};

export default App;
