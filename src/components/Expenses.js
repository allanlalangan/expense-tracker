import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

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
