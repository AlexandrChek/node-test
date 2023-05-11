import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Cats home page')
})
router.get('/about', (req, res) => {
    res.send('This is about cats')
})

export default router