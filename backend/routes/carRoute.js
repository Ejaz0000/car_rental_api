const express = require('express');
const axios = require('axios');
const router = express.Router();

const getCars = async (req, res) => {
    try {
      const response = await axios.get(process.env.CAR_API_URL);
      console.log(response.data);
      res.json(response.data);
      
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

router.get('/', getCars);

module.exports = router;