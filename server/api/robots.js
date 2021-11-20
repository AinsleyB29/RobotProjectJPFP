const router = require('express').Router();
const robots = require('../db/robot');
const projects = require('../db/project');

router.get('/', async (req, res, next) => {
  try {
    res.send(await robots.findAll());
  } catch (error) {
    next(error);
  }
});

router.get('/:robotId', async (req, res, next) => {
  try {
    const robot = await robots.findByPk(req.params.robotId, {
      include: [projects],
    });
    res.json(robot);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
