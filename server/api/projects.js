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
    console.log('this is req.params', req.params);
    const project = await projects.findByPk(req.params.projectId, {
      include: [robots],
    });
    res.send(project);
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
