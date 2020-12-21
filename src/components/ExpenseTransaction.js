import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

const ExpenseTransaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li key={transaction.id} className="transaction">
      <span className="transaction-text">{transaction.expenseText}</span>
      <span>Rs {transaction.expenseAmount}</span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default ExpenseTransaction;
