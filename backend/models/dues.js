const mongoose = require('mongoose');

const dueSchema = new mongoose.Schema({
  fee_head: { type: mongoose.Schema.Types.ObjectId, ref: 'FeeHead' }, // Reference to FeeHead model
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' }, // Reference to Student model
  due_date: Date,
  timestamp: Date,
});

// Create the Due model
const dues = mongoose.model('dues', dueSchema);

module.exports = dues;
