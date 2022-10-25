const express = require('express');
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors())
const categories = require('./data/Category.json')
app.get('/', (req, res) => {
    res.send('hello bangladesh')
})
app.get('/categories_item', (req, res) => {
    res.send(categories)
})
app.listen(port, ()=> {
    console.log('server running now', port)
})