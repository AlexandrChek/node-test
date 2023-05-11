import express from 'express'
import path from 'path'

const app = express()

import cats from './public/cats/router.js'
import fishes from './public/fishes/fishes_router.js'

const c_b_1 = (req, res, next) => {
    console.log('First action')
    next()
}
const c_b_2 = (req, res, next) => {
    console.log('Second action')
    next()
}

const middleware_function_1 = (req, res, next) => {
    console.log('Hello!')
    next()
}
const middleware_function_2 = (req, res, next) => {
    req.myMessage = 111
    next()
}

app.use(express.static(path.resolve('./public')))

app.use(middleware_function_1)
app.use('/secret', middleware_function_2)

app.use('/cats', cats)
app.use('/fishes', fishes)

app.get('/about', [c_b_1, c_b_2], (req, res) => {
    res.send('It`s about us')
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./index.html'))
})

app.get('/ids/:id', (req, res) => {
    res.sendFile(path.resolve(`./public/ids/${req.params.id}.html`))
})

app.all('/secret', (req, res) => {
    let x1 = Math.random()
    let x2 = Math.random()
    if(x1 >= x2) {
        console.log(req.myMessage)
        res.sendFile(path.resolve('./public/secret.html'))
    } else {
        res.sendFile(path.resolve('./public/404.html'))
    }
})



app.listen(3000, () => {
    console.log('Server started: http://localhost:3000')
})