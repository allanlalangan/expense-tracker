import "./ExpenseItem_CourseTemplate.css";

function ExpenseItem(props) {
  return (
    <article className="expense-item">
      <div>{props.date}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p className="expense-item__price">{props.amount}</p>
      </div>
    </article>
  );
}

export default ExpenseItem;
