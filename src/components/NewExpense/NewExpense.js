import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveNewExpense = (newExpenseData) => {
    const newExpense = {
      ...newExpenseData,
    };

    props.onAddExpense(newExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpense={saveNewExpense} />
    </div>
  );
};

export default NewExpense;
