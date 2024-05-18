const express = require('express');
const router = express.Router();
const Bhawan = require('../models/bhawan');

router.post('/store', async (req, res) => {
  const { bhawanName, status } = req.body;
  if (!bhawanName || !status) {
    return res.status(400).send('Invalid data');
  }

  try {
    // Find the bhawan by name and update it, or create a new one if it doesn't exist
    const updatedBhawan = await Bhawan.findOneAndUpdate(
      { bhawanName },
      { status },
      { new: true, upsert: true } // upsert option creates the doc if it doesn't exist
    );
    res.status(200).send('Data stored successfully');
  } catch (error) {
    console.error('Error storing data', error);
    res.status(500).send('Internal server error');
  }
});

router.get('/all', async (req, res) => {
  try {
    const bhawans = await Bhawan.find();
    res.status(200).json(bhawans);
  } catch (error) {
    console.error('Error fetching bhawans', error);
    res.status(500).send('Internal server error');
  }
});

module.exports = router;