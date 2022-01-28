import ExpenseItem from "./ExpenseItem";
import "./Expenses_CourseTemplate.css";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.data.map((expense) => {
        return <ExpenseItem {...expense} />;
      })}
    </div>
  );
}

export default Expenses;
