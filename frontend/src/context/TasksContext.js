import { createContext, useReducer } from 'react'

export const TasksContext = createContext()
const sorting = (task) => {
    return task.sort((a, b) => b.priority - a.priority)
}
export const tasksReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TASKS':
            return {
                tasks: sorting(action.payload)
            }
        case 'CREATE_TASK':
            const taskExists = state.tasks.some(t => t.taskname === action.payload.taskname);

            if (taskExists) {
                return {
                    tasks: sorting(state.tasks.map(t =>
                        t.taskname === action.payload.taskname ? action.payload : t
                    )
                    )
                };
            }
            else {
                return {
                    tasks: sorting([action.payload, ...state.tasks])
                };
            }
        case 'DELETE_TASK':
            console.log(action)
            console.log(state.tasks.filter(t => t.taskname !== action.payload))
            return {
                tasks: sorting(state.tasks.filter(t => t.taskname !== action.payload))
            }
        default:
            return state
    }
}

export const TasksContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(tasksReducer, {
        tasks: null
    })
    return (
        <TasksContext.Provider value={{ ...state, dispatch }}>
            {children}
        </TasksContext.Provider>
    )
}