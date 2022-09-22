import React from 'react';
import { useParams } from 'react-router';


const TaskDetailPage = ({tasks}) => {

    const {id} = useParams()

    return (
        <div>
            <h1>Task {id} Details</h1>
            <h2>{tasks[id-1]?tasks[id-1].name:null}</h2>
            <h3>{tasks[id-1]?tasks[id-1].description:null}</h3>
        </div>
    );
}

export default TaskDetailPage;
