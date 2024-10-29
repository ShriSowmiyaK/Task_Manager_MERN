require('dotenv').config()
const ex = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { createTask, getTask, deleteTask } = require('./controllers/TaskController');

const port = 4000;
const app = ex();

//middleware
app.use(ex.json())
app.use(cors())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//routes
app.post('/task', createTask);
app.get('/task', getTask)
app.delete('/task/:taskname', deleteTask)

mongoose.connect(process.env.MONGOURL)
  .then(() => {
    console.log('connected to database')
    app.listen(process.env.PORT || port, () => {
      console.log('listening for requests on port', process.env.PORT || port)
    })
  })
  .catch((err) => {
    console.log(err)
  })