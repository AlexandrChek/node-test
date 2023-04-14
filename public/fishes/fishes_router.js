const express = require('express')
const router = express.Router()

const fishes_controller = require('./fishes_controller.js')

router.get('/', fishes_controller.home)
router.get('/about', fishes_controller.about)

module.exports = router