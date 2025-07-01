const express = require('express');
const Expense = require('../models/Expense');

const router = express.Router();

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'Unauthorized' });
}

router.get('/', isAuthenticated, async (req, res) => {
  const expenses = await Expense.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json(expenses);
});

router.post('/', isAuthenticated, async (req, res) => {
  const { title, type, amount } = req.body;
  const expense = new Expense({
    user: req.user._id,
    title,
    type,
    amount
  });
  await expense.save();
  res.status(201).json(expense);
});

router.delete('/:id', isAuthenticated, async (req, res) => {
  try {
    const expense = await Expense.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id
    });
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    res.json({ message: 'Expense deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/:id', isAuthenticated, async (req, res) => {
  try {
    const { title, type, amount } = req.body;
    const expense = await Expense.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      { title, type, amount },
      { new: true }
    );
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }
    res.json(expense);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;