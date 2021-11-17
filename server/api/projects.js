const express = require('express');
const router = express.Router();
const projects = require('../db/project');

router.get('/', async (req, res, next) => {
  try {
    res.send(await projects.findAll());
  } catch (error) {
    next(error);
  }
});

module.exports = router;
