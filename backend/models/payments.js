const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  fee_head: { type: mongoose.Schema.Types.ObjectId, ref: 'FeeHead' }, // Reference to FeeHead model
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' }, // Reference to Student model
  due_date: Date,
  timestamp: Date,
});

// Create the Payment model
const Payments= mongoose.model('Payments', paymentSchema);

module.exports = Payments;
