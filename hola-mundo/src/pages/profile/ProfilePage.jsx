import React from 'react';
import { useNavigate } from 'react-router';

const ProfilePage = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h1>Your profile</h1>
            <button onClick={()=>navigate(-1)}>Go to home</button>
            <button onClick={()=>navigate('/tasks')}>Your tasks</button>
        </div>
    );
}

export default ProfilePage;
