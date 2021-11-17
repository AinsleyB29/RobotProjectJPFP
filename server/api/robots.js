const express = require('express');
const router = express.Router();
const robots = require('../db/robot');

router.get('/', async (req, res, next) => {
  try {
    res.send(await robots.findAll());
  } catch (error) {
    next(error);
  }
});

module.exports = router;
