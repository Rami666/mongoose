const express = require('express')
const app = express()

require('dotenv').config()

const dbConnect = require('./config/db')
dbConnect()


app.use(express.json()) // needed to parse the body of the message
app.use('/users', require('./routes/userRoutes'))

app.get('/', (req, res) => {
    console.log('hello from route');

    res.send('hello from express');
})

const port = process.env.PORT || 4001
app.listen(port, () => console.log('server is up and running', port))
