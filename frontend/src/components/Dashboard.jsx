import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [financeData, setFinanceData] = useState([]);
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    const fetchFinanceData = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/finance', {
          headers: { 'x-auth-token': token }
        });
        console.log(res.data);  // Inspect this output in the browser's console
  
        // Handle nested or direct array data
        if (res.data && Array.isArray(res.data.data)) {
          setFinanceData(res.data.data);  // Use nested array if data is inside an object
        } else if (Array.isArray(res.data)) {
          setFinanceData(res.data);  // Direct array response
        } else {
          console.error("Expected an array but got something else");
        }
      } catch (error) {
        console.error("Error fetching finance data", error);
      }
    };
    fetchFinanceData();
  }, []);
  
  

  const getAdvice = async () => {
    const total = financeData.reduce((acc, item) => acc + item.amount, 0);
    const income = 50000;  // Example income value, can be set dynamically
    const res = await axios.post('/api/finance/analyze', { total, income });
    setAdvice(res.data.advice);
  };

  return (
    <div>
      <h1>Finance Dashboard</h1>
      {financeData && financeData.length > 0 ? (
        financeData.map((item) => (
          <div key={item._id}>
            <p>Amount: {item.amount}</p>
            <p>Category: {item.category}</p>
          </div>
        ))
      ) : (
        <p>No financial data available</p>
      )}
    </div>
  );
  
};

export default Dashboard;
