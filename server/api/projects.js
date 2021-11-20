const router = require('express').Router();
const projects = require('../db/project');
const robots = require('../db/robot');

router.get('/', async (req, res, next) => {
  try {
    res.send(await projects.findAll());
  } catch (error) {
    next(error);
  }
});

router.get('/:projectId', async (req, res, next) => {
  try {
    const project = await projects.findByPk(req.params.projectId, {
      include: [robots],
    });
    res.json(project);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await projects.create(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
