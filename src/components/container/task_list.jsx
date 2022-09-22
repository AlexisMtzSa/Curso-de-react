import React, {useState, useEffect} from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'
import '../../styles/task.scss'
import TaskForm from '../pure/form/taskForm'

const TaskListComponent = () =>{

    const defaultTask1 = new Task('Example 1', 'Description 1', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example 2', 'Description 2', true, LEVELS.URGENT)
    const defaultTask3 = new Task('Example 3', 'Description 3', false, LEVELS.BLOCKING)

    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified')
        setTimeout(()=>{
            setLoading(false)
        }, 2000)
        
        return () => {
            console.log('TaskList component is going to unmount')
        };
    }, [tasks]);

    function completeTask(task){
        console.log('Complete this Task:',task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask[index].completed = !tempTask[index].completed
        //We update the state of the component with the new list task and it'll uodate the iteration
        //of the tasks in order to show the task updated
        setTasks(tempTask)
    }

    function removeTask(task){
        console.log('Delete this Task:',task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }

    function addTask(task){
        console.log('Add this Task:',task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    const Table = ()=>{
        return(
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Titulo</th>
                        <th scope='col'>Descripcion</th>
                        <th scope='col'>Prioridad</th>
                        <th scope='col'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => {
                        return (<TaskComponent key={index} task={task} complete={completeTask} remove={removeTask}></TaskComponent>)
                    })}

                </tbody>
                        
            </table>
        )
    }

    let tasksTable = tasks.length>0? <Table/>
        :
        (<div>
            <h3>There are no tasks to show</h3>
            <h4>Please create one</h4>
        </div>)

    const loadingStyle = {
        color: 'grey',
        fontSize: '30px',
        fontWeight: 'bold'
    }
    
  return (
    <div>
        <div className='col-12'>
            <div className='card'>
                <div className='card-header p-3'>
                    <h5>
                        Tus tareas
                    </h5>
                </div>
                <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height: '400px'}}>
                {/*TODO: Add loading spinner*/}
                    {loading? <p style={loadingStyle}>Loading tasks...</p>:tasksTable}
                </div>
                <TaskForm add={addTask} length={tasks.length}></TaskForm>
            </div>
            
        </div>
    </div>
  )
}

export default TaskListComponent
