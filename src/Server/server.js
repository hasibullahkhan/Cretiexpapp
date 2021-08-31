const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const con = require('./db')
const app = express();
//  npm install body-parser install in server folder 
// npm install mysql2
app.use(cors());
app.use(bodyParser.json())
app.get('/tasks', (req, res) => {
    res.send('list of all task')
})

app.post('/addTask', (req, res) => {

    console.log(res.body)
    // const ADD_QUERY = "insert into dbo.Employee values ('Khan', 'IT', '2021-08-15', 'TASK.png')"
    const ADD_QUERY = `insert into dbo.Employee values ('${req.body.task}')`
    con.query(ADD_QUERY), (err) => {
        if (err) console.log(err)
        else
            res.send('Tasks has been added')

    }

})

app.get('/deleteTask', (req, res) => {
    res.send('deleted Tasks')
})
app.listen(4000, () => {
    console.log('running on port 4000')
})