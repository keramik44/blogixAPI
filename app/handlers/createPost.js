const Post = require( '../models/post' );

module.exports = ( mongoDB  ) => {
    return ( req, res ) => {
        console.log( req.body );
        res.json( 'aaa' );
    }
}
