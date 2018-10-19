const express = require( 'express' );
const router = require( './routes/router' );
const MongoDBManager = require( './utils/db' ); 

const app = express();

const mongoDB = new MongoDBManager();
//mongoDB.insertDumbData( 'miałczek' );
mongoDB.getAllDumbData();

app.use( express.json() );
app.use( '/api/v1', router );

module.exports = app;
