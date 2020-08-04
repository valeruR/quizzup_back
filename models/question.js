const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    },
    quizz: {
      type: Schema.Types.ObjectId,
      ref: 'Quizz',
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Question', postSchema);