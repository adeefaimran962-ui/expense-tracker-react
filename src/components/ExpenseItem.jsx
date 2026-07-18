

function ExpenseItem({
  id,
  title,
  amount,
  category,
  deleteExpense,
}) {
  return (
    <div className="expense-item">
      <h3>{title}</h3>

      <p><strong>Amount:</strong> Rs {amount}</p>

      <p><strong>Category:</strong> {category}</p>

      <button onClick={() => deleteExpense(id)}>
        🗑 Delete
      </button>
    </div>
  );
}

export default ExpenseItem;