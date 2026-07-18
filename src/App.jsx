import { useState, useEffect } from "react";
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filterCategory, setFilterCategory] = useState("All");

  useEffect(() => {
    const storedExpenses = localStorage.getItem("expenses");

    if (storedExpenses) {
      setExpenses(JSON.parse(storedExpenses));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses)
    );
  }, [expenses]);

  function deleteExpense(id) {
    const updatedExpenses = expenses.filter(
      (expense) => expense.id !== id
    );

    setExpenses(updatedExpenses);
  }

  function clearAllExpenses() {
    setExpenses([]);
  }

  const filteredExpenses =
    filterCategory === "All"
      ? expenses
      : expenses.filter(
          (expense) =>
            expense.category === filterCategory
        );

  const totalExpenses = filteredExpenses.reduce(
    (total, expense) =>
      total + Number(expense.amount),
    0
  );

  return (
    <>
      <Header />

      <ExpenseForm
        expenses={expenses}
        setExpenses={setExpenses}
      />

      <div className="filter-box">
        <select
          value={filterCategory}
          onChange={(e) =>
            setFilterCategory(e.target.value)
          }
        >
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Education">Education</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="total-box">
        <h3>Total Expenses: Rs {totalExpenses}</h3>
      </div>

      <ExpenseList
        expenses={filteredExpenses}
        deleteExpense={deleteExpense}
        clearAllExpenses={clearAllExpenses}
      />
    </>
  );
}

export default App;