const express = require('express');
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors())
const categories = require('./data/Category.json')
const tutorials = require('./data/Data.json')
app.get('/', (req, res) => {
    res.send('hello bangladesh')
})
app.get('/categories_item', (req, res) => {
    res.send(categories)
})
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const tutorialCategory = tutorials.filter(tutorial => tutorial.category_id === id);
    res.send(tutorialCategory)
})
app.get('/tutorial/:id', (req, res) => {
    const id = req.params.id;
    const selectTutorial = tutorials.find(tutorial => tutorial._id === id)
    res.send(selectTutorial)
})
app.listen(port, ()=> {
    console.log('server running now', port)
})
app.get('/tutorials', (req, res) => {
    res.send(tutorials)
})