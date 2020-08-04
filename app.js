const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose
.connect(
  'mongodb+srv://test:test@cluster0-mylhf.mongodb.net/quizzup?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}
)
.then(result => {
  app.listen(8080);
})
.catch(err => console.log(err));