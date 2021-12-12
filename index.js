require('ejs')
const {Datastore} = require('@google-cloud/datastore')
const { notStrictEqual } = require('assert')
const express = require('express')
const path = require('path')
const notes = require('./public/js/notes.js')
require('./public/js/gcloudStorage')

const app = express();
app.use(express.static('public'))

app.set('views','./views')
app.set('view engine','ejs')

const home = () => {
    app.get('/',(req, res) => {
        notes.note.title = 'pamagat'
        notes.note.retrieveNote()
        res.render('index')
    })
}

app.listen(3000,() => {
    console.log('Server running on port 3000')
})

home()

