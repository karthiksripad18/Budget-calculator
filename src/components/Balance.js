import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);
  const incomeAmounts = incomeTransactions.map(
    (transaction) => transaction.incomeAmount
  );
  const expenseAmounts = expenseTransactions.map(
    (transaction) => transaction.expenseAmount
  );

  const totalIncome = incomeAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const totalExpense = expenseAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="balance">
      <h2>Your balance</h2>
      <h3>Rs {(totalIncome - totalExpense).toFixed(2)}</h3>
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p>+Rs {totalIncome}</p>
        </div>
        <div className="minus">
          <h3>Expenses</h3>
          <p>-Rs {totalExpense}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
