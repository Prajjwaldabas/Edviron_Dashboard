const mongoose = require('mongoose');

// Define a schema for the "transactions" collection
const transactionSchema = new mongoose.Schema({
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School', // Assuming a School model
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['SUCCESS', 'FAILED'], // You can add more status options if needed
  },
  amount: {
    type: Number,
    required: true,
  },
  payment_mode: {
    type: String,
    required: true,
  },
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
});

// Create a model based on the schema
const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
