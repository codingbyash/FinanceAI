import React, { useState } from 'react';

const ExpenseForm = () => {
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add expense to database or API call
    console.log('Expense added:', { date, category, amount, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Date:</label>
      <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
      <br />
      <label>Category:</label>
      <input type="text" value={category} onChange={(event) => setCategory(event.target.value)} />
      <br />
      <label>Amount:</label>
      <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} />
      <br />
      <label>Description:</label>
      <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
      <br />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;