
import { useState } from 'react'
import { useTasksContext } from '../hooks/useTasksContext'

const TaskForm = () => {
  const { dispatch } = useTasksContext()

  const [taskname, setTaskname] = useState('')
  const [duedate, setDueDate] = useState('')
  const [priority, setPriority] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])
  
  const getCurrentDate = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    const task = { taskname, duedate, priority }

    const response = await fetch('https://task-manager-mern-62ye.onrender.com/task', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)

      setEmptyFields(json.emptyFields || [])
    }
    if (response.ok) {
      setEmptyFields([])
      setError(null)
      setTaskname('')
      setDueDate('')
      setPriority('')
      dispatch({ type: 'CREATE_TASK', payload: json })
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Task</h3>

      <label>Task Title:</label>
      <input
        type="text"
        onChange={(e) => setTaskname(e.target.value)}
        value={taskname}
        className={emptyFields && emptyFields.includes('taskname') ? 'error' : ''}
      />

      <label>Due Date:</label>
      <input
        type="date"
        onChange={(e) => setDueDate(e.target.value)}
        value={duedate}
        min={getCurrentDate()}
        className={emptyFields && emptyFields.includes('duedate') ? 'error' : ''}
      />

      <label>Priority (1-5):</label>
      <input
        type="number"
        min="1"
        max="5"
        onChange={(e) => setPriority(e.target.value)}
        value={priority}
        className={emptyFields && emptyFields.includes('priority') ? 'error' : ''}
      />

      <button>Add Task</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default TaskForm
