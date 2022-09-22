import React from 'react';
import { useNavigate } from 'react-router';
import TaskListComponent from '../../components/container/task_list';

const ProfilePage = ({logOut}) => {

    const navigate = useNavigate()

    return (
        <div>
            <h1>Your profile</h1>
            <TaskListComponent/>
            <button onClick={()=> {
                logOut()
                navigate('/')
            }} className='btn btn-danger btn-lg'>Log out</button>
        </div>
    );
}

export default ProfilePage;
