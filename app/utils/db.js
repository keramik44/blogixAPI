const mongoose = require( 'mongoose' );
const config = require( '../config/config' );
const Kitten = require( '../models/kitten' );

const options = { 
    keepAlive: 300000,
    connectTimeoutMS: 30000,
    useNewUrlParser: true
};
module.exports = class MongoDBManager {
    constructor() {
        this.isConnected = false;
        this.connectToMongo();
    }

    connectToMongo() {
        const dbUrl = `mongodb://${config.dbUser}:${config.dbPass}@${config.dbPath}`;
        
        mongoose.connect(dbUrl, options)
        .then( () => { 
            this.isConnected = true;
        } )
        .catch( (e) => {
            console.log(e);
        } );
    }

    insertDumbData( catName ){
        const newCat = new Kitten({ name: catName } );
        console.log(newCat);
        newCat.save( ( err, newCat) => {
            console.log( 'save error: '+ err );
            console.log( newCat );
        } );
    }
    
    getAllDumbData(){
        Kitten.find( (err, kittens) => {
            if (err) return console.error(err);
            console.log(kittens);
        } );
    }
}
