const Finance = require('../models/Finance');
const { exec } = require('child_process');
const path = require('path');
// Get all finance data for a user
exports.getFinanceData = async (req, res) => {
  try {
    const financeData = await Finance.find({ userId: req.user.id });
    res.json(financeData);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving finance data" });
  }
};

// Add new finance entry
exports.addFinanceEntry = async (req, res) => {
  const { amount, category, date, description } = req.body;
  try {
    const newEntry = new Finance({
      userId: req.user.id,
      amount,
      category,
      date,
      description
    });
    await newEntry.save();
    res.json(newEntry);
  } catch (error) {
    res.status(500).json({ message: "Error adding finance entry" });
  }
};

exports.analyzeSpending = (req, res) => {
    const { total, income } = req.body;
  
    const scriptPath = path.join(__dirname, '../python_scripts/finance_advisor.py');
    
    const command = `python3 ${scriptPath} ${total} ${income}`;
    
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${stderr}`);
        return res.status(500).json({ message: "Error executing Python script" });
      }
      return res.json({ advice: stdout });
    });
  };