const express = require('express')
const app = express()

const cats = require('./public/cats/router')
const fishes = require('./public/fishes/fishes_router')

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

app.use(express.static(__dirname + '/public'))

app.use(middleware_function_1)
app.use('/secret', middleware_function_2)

app.use('/cats', cats)
app.use('/fishes', fishes)

app.get('/about', [c_b_1, c_b_2], (req, res) => {
    res.send('It`s about us')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/ids/:id', (req, res) => {
    res.sendFile(__dirname + `/public/ids/${req.params.id}.html`)
})

app.all('/secret', (req, res) => {
    let x1 = Math.random()
    let x2 = Math.random()
    if(x1 >= x2) {
        console.log(req.myMessage)
        res.sendFile(__dirname + '/public/secret.html')
    } else {
        res.sendFile(__dirname + '/public/404.html')
    }
})



app.listen(3000, () => {
    console.log('Server started: http://localhost:3000')
})