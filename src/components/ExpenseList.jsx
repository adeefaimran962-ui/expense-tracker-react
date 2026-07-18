import ExpenseItem from "./ExpenseItem";

function ExpenseList({
  expenses,
  deleteExpense,
  clearAllExpenses,
}) {
  return (
    <div className="expense-list">
      <h2>Expense List</h2>

      <button onClick={clearAllExpenses}>
        Clear All
      </button>

      {expenses.length === 0 ? (
        <p className="empty-message">No Expenses Found</p>
      ) : (
        expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            category={expense.category}
            deleteExpense={deleteExpense}
          />
        ))
      )}
    </div>
  );
}

export default ExpenseList;