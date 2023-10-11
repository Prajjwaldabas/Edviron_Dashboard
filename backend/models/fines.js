const mongoose = require('mongoose');

// Define a schema for the "fines" collection
const fineSchema = new mongoose.Schema({
  fine_name: {
    type: String,
    required: true,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student', // Assuming a Student model
    required: true,
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin', // Assuming an Admin model
    required: true,
  },
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School', // Assuming a School model
    required: true,
  },
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
});

// Create a model based on the schema
const fines = mongoose.model('fines', fineSchema);

module.exports = fines;
