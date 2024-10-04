const Task = require('../models/TaskModel');
const mongoose = require('mongoose');




const getTask = async (req, res) => {
    console.log('getTask function called');
    try {
        const task = await Task.find({});
        res.status(200).json(task);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};



const createTask = async (req, res) => {
    console.log('createTask function called');
   const { taskname, duedate, priority } = req.body;
    let emptyarr = [];
    if (!taskname) emptyarr.push('taskname');
    if (!duedate) emptyarr.push('duedate');
    if (!priority) emptyarr.push('priority');
    if (emptyarr.length > 0) {
        return res.status(400).json({ error: 'Please fill in all fields', emptyarr });
    }
    try {
        const oldtask = await Task.find({"taskname":taskname});
        console.log("oldtask : ",oldtask)
        let task;
     //   const res = await oldtask.toArray()
     //   console.log(res)
        if(oldtask.length == 0)
        {

         task = await Task.create({ taskname, duedate, priority });
        }
        else
        {
            task = await Task.updateOne({"taskname":taskname},{$set :{"duedate" : duedate,"priority":priority}})
        }
        console.log(taskname, duedate, priority);
        res.status(200).json(task);
    
}
    catch (error) 
    {
        res.status(400).json({ error: error.message });
    }
};


const deleteTask = async(req,res)=>{
    const {taskname} = req.params 
    console.log("task :" ,taskname)
    console.log('deleteTask function called');
    try {
        const task = await Task.deleteOne({taskname:taskname});
        res.status(200).json(task);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};



module.exports = {createTask,getTask,deleteTask}