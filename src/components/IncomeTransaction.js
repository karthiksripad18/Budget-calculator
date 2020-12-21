import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeTransaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li key={transaction.id} className="transaction">
      <span className="transaction-text">{transaction.incomeText}</span>
      <span>Rs {transaction.incomeAmount}</span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default IncomeTransaction;
