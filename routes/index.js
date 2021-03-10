var express = require('express');
var router = express.Router();

//Portfolio JSON Data
const { projects } = require('../data.json');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.locals.projects = projects;
  res.render('index');
});

module.exports = router;
