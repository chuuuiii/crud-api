require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const crudRoute = require('./routes/crud.routes');
const morgan = require("morgan");
const cors = require('cors');
const app = express();
const connectDB = require('./config/db');


//connect to DB
connectDB();

//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

//routes
app.use('/api/crud', crudRoute);

// app.listen(3000, () => {
//   console.log('Server listening to port 3000')
// });

app.get('/', (req, res) => {
  res.send('Hello, World')
});

//Start the server 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});