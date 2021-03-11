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
  const currentProject = projects[req.params.id];
  res.locals.project = currentProject;
  res.render('project');
});

module.exports = router;
