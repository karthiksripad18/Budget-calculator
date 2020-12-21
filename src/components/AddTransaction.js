import React, { useState, useContext } from "react";

import { v4 as uuidv4 } from "uuid";

import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addIncome, addExpense } = useContext(GlobalContext);
  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0
  });
  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0
  });

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const onSubmitIncome = (e) => {
    e.preventDefault();
    const newIncomeTransaction = {
      id: uuidv4(),
      incomeText: income.incomeText,
      incomeAmount: income.incomeAmount * 1 // for converting from string to number
    };
    addIncome(newIncomeTransaction);
    setIncome({ incomeText: "", incomeAmount: 0 });
  };

  const onSubmitExpense = (e) => {
    e.preventDefault();
    const newExpenseTransaction = {
      id: uuidv4(),
      expenseText: expense.expenseText,
      expenseAmount: expense.expenseAmount * 1 // for converting from string to number
    };
    addExpense(newExpenseTransaction);
    setExpense({ expenseText: "", expenseAmount: 0 });
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <input
            type="text"
            value={income.incomeText}
            name="incomeText"
            placeholder="Add Income..."
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <input
            type="number"
            value={income.incomeAmount}
            name="incomeAmount"
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
      <form onSubmit={onSubmitExpense}>
        <div className="input-group expense">
          <input
            type="text"
            value={expense.expenseText}
            name="expenseText"
            placeholder="Add Expense..."
            autoComplete="off"
            onChange={onChangeExpense}
          />
          <input
            type="number"
            value={expense.expenseAmount}
            name="expenseAmount"
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeExpense}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
