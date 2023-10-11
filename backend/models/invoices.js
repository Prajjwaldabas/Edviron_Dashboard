const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  dues: [String], // Array of dues, modify the type accordingly
  status: String, // Status field of type String
  payments: [String], // Array of payments, modify the type accordingly
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' }, // Reference to the Student model
  school: { type: mongoose.Schema.Types.ObjectId, ref: 'School' }, // Reference to the School model
  fine_days: Number, // Number of fine days
  fine_amount: Number, // Fine amount
  timestamp: Date, // Timestamp in Date format
  fee_breakup: Object, // Fee breakup, you can specify a more specific schema for this
  fee_total: Number, // Total fee
}, { timestamps: true }); // Timestamps option for createdAt and updatedAt fields

// Create the Invoice model
const invoices = mongoose.model('invoices', invoiceSchema);

module.exports = invoices;
