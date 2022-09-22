import React from 'react';
import PropTypes from 'prop-types'

const Task = ({id, description, isCompleted, remove, changeStatus}) => {
    return (
        <li style={{
            textDecoration: isCompleted?'line-through':'none',
            textDecorationColor: isCompleted?'green':'none',
            color: isCompleted?'green':'white'
        }}>
            {id} - {description} - {isCompleted?'Complete':'Incomplete'}
            <button onClick={()=>remove(id)} style={{margin: '5px 10px'}}>Remove</button>
            <button onClick={()=>changeStatus(id, isCompleted)}>Change status</button>
        </li>
    );
}

Task.propTypes = {
    description: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    remove: PropTypes.func.isRequired,
    changeStatus: PropTypes.func.isRequired
}

export default Task;
