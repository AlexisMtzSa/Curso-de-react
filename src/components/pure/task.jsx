import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum'

const TaskComponent = ({task, complete, remove}) => {


    /**Funcion que retorna una insignia dependiendo del nivel de la tarea */
    function taskLevelBadge(){
        
        switch(task.level){

            case LEVELS.NORMAL:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {task.level}
                        </span>
                    </h6>)
            case LEVELS.URGENT:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>
                    </h6>)
            case LEVELS.BLOCKING:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {task.level}
                        </span>
                    </h6>)
            default:
                break

        }
    }

    /**Funcion que retorna un icono dependiendo del estado de la tarea */
    function taskIconCompleted(){
        if(task.completed)
            return (<i onClick={()=>complete(task)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
        else
            return (<i onClick={()=>complete(task)} className='bi-toggle-off task-action' style={{color: 'gray'}}></i>)
    }


    const taskCompleted = {
        color: 'gray',
        fontWeight: 'bold',
        textDecoration: 'line-through'
    }

    const taskPending = {
        fontWeight: 'bold',
        color: 'tomato'
    }

  return (
    <tr className='fw-normal' style={task.completed? taskCompleted: taskPending}>
        <th>
            <span className='ms-2'>{task.name}</span>
        </th>
        <td className='align-middle'>
            <span>{task.description}</span>
        </td>
        <td className='align-middle'>
        {/* Ejecucion de la funcion que retorna un badge*/}
            {taskLevelBadge()}
        </td>
        <td className='align-middle'>
            {taskIconCompleted()}
            <span>{task.completed?'Completed':'Pending'}</span>
            <i onClick={()=>remove(task)} className='bi-trash task-action' style={{color: 'tomato'}}></i>
        </td>
    </tr>
    /**<div>
        <h2 className='task-name'>
            Nombre: { task.name }
        </h2>
        <h3>
            Descripción: { task.description }
        </h3>
        <h4>
            Nivel: { task.level }
        </h4>
        <h5>
            Esta tarea está { task.completed?'Completa':'Pendiente' }
        </h5>
    </div>*/
  )
}

 TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
 }

export default TaskComponent
