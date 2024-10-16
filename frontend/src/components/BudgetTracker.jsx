import React, { useState } from 'react';

const BudgetTracker = () => {
  const [budget, setBudget] = useState('');
  const [currentSpending, setCurrentSpending] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to calculate remaining budget
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Total Budget:
        <input 
          type="number" 
          value={budget} 
          onChange={(e) => setBudget(e.target.value)} 
        />
      </label>
      <label>
        Current Spending:
        <input 
          type="number" 
          value={currentSpending} 
          onChange={(e) => setCurrentSpending(e.target.value)} 
        />
      </label>
      <button type="submit">Track Budget</button>
    </form>
  );
};

export default BudgetTracker;
