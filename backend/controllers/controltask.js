const Task = require('../models/taskmodel');
const mongoose = require('mongoose');
const getTask = async (req, res) => {
    console.log('getTask function called');
    return res.status(200).json({name:sowmiya})
};
const createTask = async (req, res) => {
    console.log('createTask function called');
  /*  const { taskname, duedate, priority } = req.body;
    let emptyarr = [];
    if (!taskname) emptyarr.push('taskname');
    if (!duedate) emptyarr.push('duedate');
    if (!priority) emptyarr.push('priority');
    if (emptyarr.length > 0) {
        return res.status(400).json({ error: 'Please fill in all fields', emptyarr });
    }
    try {
        const task = await Task.create({ taskname, duedate, priority });
        //console.log(taskname, duedate, priority);
        res.status(200).json(task);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }*/
};
module.exports = {createTask,getTask}