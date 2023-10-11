const mongoose = require('mongoose');

// Define a schema for the "sections" collection
const sectionSchema = new mongoose.Schema({
  class: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  school_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  fine_grace_period: {
    type: Number,
    required: true,
  },
  fine_per_day: {
    type: Number,
    required: true,
  },
  fine_after_grace_period: {
    type: Number,
    required: true,
  },
  // Other fields can be added as needed
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
});

// Create a model based on the schema
const Sections = mongoose.model('Sections', sectionSchema);

module.exports = Sections;
