import express from 'express'
import {home, about} from './fishes_controller.js'

const router = express.Router()

router.get('/', home)
router.get('/about', about)

export default router