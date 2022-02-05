import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses_CourseTemplate.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("Show All");
  const selectYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const allExpenses = props.data;
  const displayedExpenses =
    filteredYear === "Show All"
      ? allExpenses
      : props.data.filter(
          (expense) => expense.date.getFullYear().toString() === filteredYear
        );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedOption={filteredYear}
        onSelectYear={selectYearHandler}
      />
      <ExpensesChart data={displayedExpenses} />
      <ExpensesList items={displayedExpenses} />
    </Card>
  );
};

export default Expenses;
