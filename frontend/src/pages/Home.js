import TaskDetails from "../components/TaskDetails"
import TaskForm from "../components/TaskForm"
const Home = () => {
    return (
        <div className="home">
             <div className="tasks">
          <TaskDetails />
      </div>
          <TaskForm />
        </div>
      )
    }
    
    export default Home