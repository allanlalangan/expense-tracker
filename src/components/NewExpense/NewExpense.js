import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = () => {
  const saveNewExpense = (newExpenseData) => {
    const newExpense = {
      ...newExpenseData,
    };
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpense={saveNewExpense} />
    </div>
  );
};

export default NewExpense;
