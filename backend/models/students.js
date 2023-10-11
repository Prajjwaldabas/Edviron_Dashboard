const mongoose = require('mongoose');

// Define a schema for the "students" collection
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone_number: [{
    type: String,
  }],
  edviron_id: {
    type: Number,
    required: true,
  },
  school_generated_id: {
    type: String,
    required: true,
  },
  school_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  previous_session_dues: {
    type: Number,
    required: true,
  },
  updatedAt: {
    type: Date,
  },
  additional_details: {
    aadhaar_number: {
      type: String,
    },
    address: {
      father_name: {
        type: String,
      },
      mother_name: {
        type: String,
      },
    },
  },
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
});

// Create a model based on the schema
const Students = mongoose.model('Students', studentSchema);

module.exports = Students;
