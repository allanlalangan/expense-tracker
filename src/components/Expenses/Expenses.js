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

  const filterExpensesByYear = props.data.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  let expensesContent = <p>No Expenses For {filteredYear}</p>;

  if (filterExpensesByYear.length > 0) {
    expensesContent = filterExpensesByYear.map((expense) => (
      <ExpenseItem {...expense} key={expense.id} />
    ));
  }

  if (filteredYear === undefined || filteredYear === "Show All") {
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
  } else {
    return (
      <Card className="expenses">
        <ExpensesFilter
          selectedOption={filteredYear}
          onSelectYear={selectYearHandler}
        />
        {expensesContent}
      </Card>
    );
  }
};

export default Expenses;
