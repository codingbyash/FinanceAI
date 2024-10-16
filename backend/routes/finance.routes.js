const express = require('express');
const router = express.Router();
const { getFinanceData, addFinanceEntry } = require('../controllers/finance.controller');
const authMiddleware = require('../middleware/auth');

// Finance Routes
router.get('/', authMiddleware, getFinanceData);
router.post('/', authMiddleware, addFinanceEntry);

module.exports = router;
