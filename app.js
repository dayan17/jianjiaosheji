var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var updateRoter = require('./routes/update');
var proxy = require('http-proxy-middleware');

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test");

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  '/recommend',
  proxy({ target: 'https://m.wowdsgn.com', changeOrigin: true })
);
app.use(
  '/registers',
  proxy({ target: 'http://172.17.134.158:3000', changeOrigin: true })
);
app.use(
  '/logins',
  proxy({ target: 'http://172.17.134.158:3000', changeOrigin: true })
);
app.use(
  '/checktoken',
  proxy({ target: 'http://172.17.134.158:3000', changeOrigin: true })
);
app.use(
  '/information',
  proxy({ target: 'http://172.17.134.158:3000', changeOrigin: true })
);
app.use(
  '/pages',
  proxy({ target: 'https://m.wowdsgn.com', changeOrigin: true })
);
app.use(
  '/v2',
  proxy({ target: 'https://m.wowdsgn.com', changeOrigin: true })
);


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/logins', loginRouter);
app.use('/registers', registerRouter);
app.use('/information',updateRoter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
