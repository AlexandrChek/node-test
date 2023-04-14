const Fishes = require('./fishes_router.js')

exports.home = function(req, res) {
    res.send('This is fisfes homepage')
}

exports.about = function(rec, res) {
    res.send('It`s about fishes')
}