import "./ExpenseItem_CourseTemplate.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const { title, amount, date } = props;

  return (
    <li>
      <Card className="expense-item">
        {<ExpenseDate date={date} />}
        <div className="expense-item__description">
          <h2>{title}</h2>
          <p className="expense-item__price">${amount}</p>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
