const express = require('express')
const app = require('./src/app.js')
const mongoose = require('mongoose')
const port = 3000

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));



// link to the database
const DATABASE_URL = "mongodb+srv://vivekvirade97:YX0br7yBAl414doz@cluster0.jg5wggw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Initiate the server.
app.listen(port, () => console.log(`App listening on port ${port}!`))
