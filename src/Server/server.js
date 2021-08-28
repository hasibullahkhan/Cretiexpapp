const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json)
app.get('/tasks', (req, res) => {
    res.send('list of all task')
})

app.post('/addTask', (req, res) => {

    console.log(res)
    res.send('you can add Tasks')
})

app.get('/deleteTask', (req, res) => {
    res.send('deleted Tasks')
})
app.listen(4000, () => {
    console.log('running on port 4000')
})