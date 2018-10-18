const expect = require('chai').expect;

const indexHandler = require('../../app/handlers/index');

let req = {
    body: {},
};

let res = {
    sendCalledWith: '',
    send: function(arg) {
        this.sendCalledWith = arg;
    }
};

describe('Index handler', function() {
    it( 'Should helllo world ', function() {
       indexHandler(req, res);
       expect( res.sendCalledWith ).to.contain( 'Hello' );
    } );
} );