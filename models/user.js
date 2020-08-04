const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  quizzs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Quizz'
    }
  ],
  Records: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Quizz'
    }
  ]
});

module.exports = mongoose.model('User', userSchema);
