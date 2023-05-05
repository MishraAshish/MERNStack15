const express = require('express')

const app = express()//express application 

app.get('/user', function (req, res) {
    res.json({
        name : "Jason"
    })
})

app.get('/html', function (req, res) {
    res.send("<h1>Application Running Through Nodemon</h1>")
})

app.get('/', function (req, res) {
    res.send('Hello World from Express')
})

app.listen(9000)//localhost:9000

console.log("Express is listening at : localhost:9000");