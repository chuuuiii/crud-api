require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require("morgan");
const cors = require('cors');
const app = express();


//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.listen(3000, () => {
  console.log('Server listening to port 3000')
});

app.get('/', (req, res) => {
  res.send('Hello, World')
});
