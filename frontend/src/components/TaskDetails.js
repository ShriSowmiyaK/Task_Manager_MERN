import { useTasksContext } from '../hooks/useTasksContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const TaskDetails = ({ task }) => {
  console.log(task);
  const { dispatch } = useTasksContext()
  const handleClick = async () => {
    const response = await fetch('/task/' + task.taskname, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({ type: 'DELETE_TASK', payload: task.taskname })
    }
  }
  return (
    <div className="task-details">
      <h4>{task.taskname}</h4>
      <p><strong>Due date : </strong>{task.duedate}</p>
      <p><strong>Priority : </strong>{task.priority}</p>
      <p>{formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default TaskDetails
