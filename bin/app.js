const express = require('express');
const indexHandler = require('./routes/index');

const app = express();
const router = express.Router();


app.use( express.json() );
app.use( '/', router.get( '/', indexHandler ) );

module.exports = app;