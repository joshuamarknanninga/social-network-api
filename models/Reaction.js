const mongoose = require('mongoose'); // Import mongoose
const { Schema, Types } = mongoose; // Destructure Schema and Types

// Define the reaction schema
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(), // Generate a new ObjectId
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => new Date(timestamp).toLocaleString()
  }
}, {
  toJSON: {
    getters: true
  },
  id: false
});

module.exports = reactionSchema;
