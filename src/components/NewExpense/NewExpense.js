import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const openOrClose = () => {
    !isFormOpen ? setIsFormOpen(true) : setIsFormOpen(false);
  };

  const saveNewExpense = (newExpenseData) => {
    const newExpense = {
      ...newExpenseData,
    };
    props.onAddExpense(newExpense);
    openOrClose();
  };

  return (
    <div className="new-expense">
      {!isFormOpen ? (
        <button onClick={openOrClose}>Click to Add New Expense</button>
      ) : (
        <ExpenseForm onCancel={openOrClose} onSubmitExpense={saveNewExpense} />
      )}
    </div>
  );
};

export default NewExpense;
