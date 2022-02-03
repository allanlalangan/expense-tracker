import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses_CourseTemplate.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState();
  const selectYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const allExpenses = props.data;
  const filteredExpensesByYear = props.data.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedOption={filteredYear}
        onSelectYear={selectYearHandler}
      />
      {filteredYear === "Show All" || filteredYear === undefined ? (
        <ExpensesList items={allExpenses} />
      ) : (
        <ExpensesList items={filteredExpensesByYear} />
      )}
    </Card>
  );
};

export default Expenses;
