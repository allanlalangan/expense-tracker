import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses_CourseTemplate.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.data.map((expense) => {
        return <ExpenseItem {...expense} />;
      })}
    </Card>
  );
};

export default Expenses;
