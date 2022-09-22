import React, {useContext} from 'react';
import PropTypes from 'prop-types'
import Task from '../pure/Task';
import { myContext } from './TaskContainer';


const TaskList = ({remove, changeStatus}) => {

    const state = useContext(myContext);

    return (
        <div>
            <h1>Your tasks</h1>
            <ul>
            {/*Renderizamos solo las tareas que se deben mostrar segun es estado y su estatus */}
                {Object.keys(state.tasks).map(key=>(!state.hideIncomplete&&!state.tasks[key].isCompleted)||(!state.hideComplete&&state.tasks[key].isCompleted)?
                    <Task key={key} id={parseInt(key)} 
                        description={state.tasks[key].description} remove={remove} 
                        isCompleted={state.tasks[key].isCompleted} changeStatus={changeStatus}/>
                    :null)}
            </ul>
        </div>
    );
}

TaskList.propTypes = {
    remove: PropTypes.func.isRequired,
    changeStatus: PropTypes.func.isRequired
}


export default TaskList;
