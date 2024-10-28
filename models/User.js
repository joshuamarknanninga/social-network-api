const { Schema, model } = require('mongoose');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // validate email using match
      // match: /regex/
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
        ref: "thought"
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'user'
    }]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;

