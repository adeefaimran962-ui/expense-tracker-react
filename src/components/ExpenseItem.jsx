function ExpenseItem({
  id,
  title,
  amount,
  category,
  deleteExpense,
})  {

  return (

    <div className="expense-item">

      <h3>{title}</h3>

      <p>Amount: Rs {amount}</p>

      <p>Category: {category}</p>

      <button onClick={() => deleteExpense(id)}>
  Delete
</button>

    </div>

  );
}

export default ExpenseItem;