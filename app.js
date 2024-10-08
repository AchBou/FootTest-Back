const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');


const indexRouter = require('./routes/index');
const playersRouter = require('./routes/players');
const teamsRouter = require('./routes/teams');
const leagueRouter = require('./routes/leagues');


const app = express();

app.use(cors({
  origin: 'http://my-football-infos-test.s3-website-us-east-1.amazonaws.com', // URL of your Angular app
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Load the YAML OpenAPI document
const swaggerDocument = YAML.load(path.join(__dirname, './docs/swagger.yaml'));

// Set up the Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', indexRouter);
app.use('/players', playersRouter);
app.use('/teams', teamsRouter);
app.use('/leagues', leagueRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404 , 'Route Not Found'));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
