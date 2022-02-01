import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses_CourseTemplate.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState();
  const selectYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedOption={filteredYear}
        onSelectYear={selectYearHandler}
      />
      {props.data.map((expense) => {
        return <ExpenseItem {...expense} key={expense.id} />;
      })}
    </Card>
  );
};

export default Expenses;
