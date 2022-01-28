import "./ExpenseItem_CourseTemplate.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const { id, title, amount, date } = props;

  return (
    <article key={id} className="expense-item">
      {<ExpenseDate date={date} />}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <p className="expense-item__price">${amount}</p>
      </div>
    </article>
  );
}

export default ExpenseItem;
