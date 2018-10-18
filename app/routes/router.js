const express = require('express');
const indexHandler = require('../handlers/index');

const router = express.Router();

router.use( (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
} );

router.get('/', indexHandler);

router.get('/about', function (req, res) {
    res.send('About birds')
})

module.exports = router