const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    questions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Question',
      }
    ],
    top: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Quizz', postSchema);