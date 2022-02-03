import React, { useState } from "react";
import "./ExpenseForm_CourseTemplate.css";

const ExpenseForm = (props) => {
  //MULTIPLE STATES for each input
  const [title, setEnteredTitle] = useState("");
  const [amount, setEnteredAmount] = useState("");
  const [date, setEnteredDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now().toString(),
      title,
      amount,
      date: new Date(date),
    };

    props.onSubmitExpense(newExpense);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            required
            id="title"
            type="text"
            value={title}
            onChange={(e) => setEnteredTitle(e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            required
            id="amount"
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={(e) => setEnteredAmount(e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            required
            id="date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={(e) => setEnteredDate(e.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
