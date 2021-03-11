var express = require('express');
var router = express.Router();

//Portfolio JSON Data
const { projects } = require('../data.json');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.locals.projects = projects;
  res.render('index');
});

/* GET about page. */
router.get('/about', function (req, res, next) {
  res.locals.projects = projects;
  res.render('about');
});

/* GET project page. */
router.get('/project/:id', function (req, res, next) {
  if (req.params.id > projects.length - 1 || req.params.id < 0) {
    console.log('Project data does not exist!');
    const err = new Error('Project page does not exist');
    err.status = 404;
    next(err);
  }

  if (isNaN(req.params.id)) {
    console.log('Project page does not exist');
    const err = new Error('Project page does not exist');
    err.status = 404;
    next(err);
  }

  const currentProject = projects[req.params.id];
  res.locals.project = currentProject;
  res.render('project');
});

module.exports = router;
