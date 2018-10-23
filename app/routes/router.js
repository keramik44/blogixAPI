const express = require( 'express' );
const MongoDBManager = require( '../utils/db' );
const indexHandler = require( '../handlers/index' );
const createPost = require( '../handlers/createPost' );

const mongoDB = new MongoDBManager();
const router = express.Router();

//main mw ( currently time printer )
router.use( ( req, res, next ) => {
    console.log( 'Time: ', Date.now() )
    next()
} );

router.get('/', indexHandler() );
router.post('/posts', createPost( mongoDB ) );

router.get( '/about', function (req, res ) {
    res.send( 'About birds' );
})

module.exports = router