import Expenses from "./components/Expenses/Expenses";
import expensesData from "./expensesData";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  return (
    <div>
      <NewExpense />
      <Expenses data={expensesData} />
    </div>
  );
};

export default App;
