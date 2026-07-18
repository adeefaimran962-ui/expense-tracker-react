import { useState } from "react";

function ExpenseForm({ expenses, setExpenses }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  function handleSubmit(e) {
    e.preventDefault();

    // Validation
    if (title.trim() === "" || amount.trim() === "") {
      alert("Please fill all fields.");
      return;
    }

    // New Expense Object
    const newExpense = {
      id: Date.now(),
      title,
      amount,
      category,
    };

    // Add Expense
    setExpenses([...expenses, newExpense]);

    // Reset Form
    setTitle("");
    setAmount("");
    setCategory("Food");
  }

  return (
    <div className="expense-form">
      <h2>Add New Expense</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Education">Education</option>
          <option value="Other">Other</option>
        </select>

        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;