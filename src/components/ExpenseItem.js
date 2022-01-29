import "./ExpenseItem_CourseTemplate.css";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const { id, title, amount, date } = props;

  return (
    <Card key={id} className="expense-item">
      {<ExpenseDate date={date} />}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <p className="expense-item__price">${amount}</p>
      </div>
    </Card>
  );
}

export default ExpenseItem;
