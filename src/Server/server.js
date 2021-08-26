const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());

app.get('/tasks', (req, res) => {
    res.send('list of all teask')
})

app.get('/addTask', (req, res) => {
    res.send('you can add Tasks')
})

app.get('/deleteTask', (req, res) => {
    res.send('deleted Tasks')
})
app.listen(4000, () => {
    console.log('running on port 4000')
})