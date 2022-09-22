import React, {useReducer} from 'react';
import TaskList from './TaskList';

//Actions
const ADD = 'ADD'
const REMOVE = 'REMOVE'
const CHANGE = 'CHANGE'
const FILTER = 'FILTER'

export const myContext = React.createContext(null)

const TaskContainer = () => {

    //Initial state for reducer
    let initialState = {
        tasksAdded: 0,
        hideComplete: false,
        hideIncomplete: false,
        tasks: {}
    }


    const reducer = (state,action) =>{
        switch(action.type){
            case ADD:

                var newState = {
                    ...state
                }

                newState.tasks[++newState.tasksAdded] = {
                    description: `Task ${newState.tasksAdded}`,
                    isCompleted: false
                }


                return  newState

            case CHANGE:

                var changedState = {
                    ...state
                }

                changedState.tasks[action.payload.id].isCompleted = !action.payload.currentStatus

                return changedState

            case FILTER:

                var filteredState = {
                    ...state
                }

                action.payload.filter(filteredState)

                return filteredState

            case REMOVE:

                var newState = {
                    ...state
                }

                delete newState.tasks[action.payload.id]

                return  newState
                
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const addTask = () => dispatch({
        type: ADD,})

    const remove = id => dispatch({
        type: REMOVE,
        payload:{
            id
        }
    })

    const changeStatus = (id, currentStatus) => dispatch({
        type: CHANGE,
        payload:{
            id,
            currentStatus
        }
    })

    const filter = filter => dispatch({
        type: FILTER,
        payload:{
            filter
        }
    })

    return (
        <myContext.Provider value={state}>
            <div>
                <TaskList remove={remove} changeStatus={changeStatus} />
                <button onClick={()=>filter(state=>state.hideIncomplete=!state.hideIncomplete)}>
                    {state.hideIncomplete?'Show':'Hide'} incomplete tasks
                </button>
                <button style={{margin: '0 10px'}} onClick={addTask}>Add task</button>
                <button onClick={()=>filter(state=>state.hideComplete=!state.hideComplete)}>
                    {state.hideComplete?'Show':'Hide'} complete tasks
                </button>

            </div>
        </myContext.Provider>
    );
}

export default TaskContainer;
