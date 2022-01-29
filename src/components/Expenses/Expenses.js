import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses_CourseTemplate.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.data.map((expense) => {
        return <ExpenseItem {...expense} />;
      })}
    </Card>
  );
}

export default Expenses;
