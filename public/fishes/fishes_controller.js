const Fishes = require('./fishes_router.js')

import parallel from 'async/parallel'

exports.home = function(req, res) {
    res.send('This is fisfes homepage')
}

exports.about = function(rec, res) {
    parallel(
        [
            function one() {return 'one fish'},
            function two() {return 'two fishes'},
            function three() {return 'three fishes'}
        ],
        function(err, results) {
            let template = `
            <p>It's about fishes.</p>
            <p>${results.one()}</p>
            <p>${results.two()}</p>
            <p>${results.three()}</p>
            `
            res.send(template)
        }
    )
}