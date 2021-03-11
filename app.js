const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'public')));

//Routes
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not found!');
  err.message = 'Sorry, the page was not found!';
  err.status = 404;
  console.log(`An error occured: ${err.status} - ${err.message}`);
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.error = err;

  if (err.status === 404) {
    res.status(err.status);
    res.render('error');
  } else {
    res.status(500);
    res.render('error');
  }
});

module.exports = app;
