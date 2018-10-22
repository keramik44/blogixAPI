const express = require( 'express' );
const router = require( './routes/router' );
const MongoDBManager = require( './utils/db' );

const app = express();

const mongoDB = new MongoDBManager();
//mongoDB.insertDumbData( 'miałczek' );
mongoDB.deleteData( '5bc9c1c1c457be2aaca1ba18' );
mongoDB.getAllDumbData( );
//mongoDB.getDataByparam( {name: 'Gownik'} );
//mongoDB.updateData( '5bc9c1c1c457be2aaca1ba18', {name: 'Łatek'}  );

app.use( express.json() );
app.use( '/api/v1', router );

module.exports = app;
