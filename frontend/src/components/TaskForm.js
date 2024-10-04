const TaskForm = () => {
    return (
        <form className="create"> 
          <h3>Add a New Task</h3>
    
          <label>Task Title:</label>
          <input 
            type="text" 
          />
    
          <label>Due Date:</label>
          <input 
            type="text" 
          />
    
          <label>Priority:</label>
          <input 
            type="number" 
          />
        <button>Add Task</button>
        </form>
      )
    }
    export default TaskForm