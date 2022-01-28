import "./ExpenseItem_CourseTemplate.css";

function ExpenseItem() {
  return (
    <article className="expense-item">
      <div>January 18th 2022</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <p className="expense-item__price">$90.00</p>
      </div>
    </article>
  );
}

export default ExpenseItem;
