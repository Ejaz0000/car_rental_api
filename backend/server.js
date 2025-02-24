const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });

  const carRoutes = require('./routes/carRoute');
  app.use('/api/cars', carRoutes);