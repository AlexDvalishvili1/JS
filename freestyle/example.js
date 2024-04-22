const express = require('express')
const app = express()

app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.post('/task', function (req, res) {
    console.log('Unser backend wurde agerufen mit route /task ', req.body)
    res.send('You called /users')
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
})