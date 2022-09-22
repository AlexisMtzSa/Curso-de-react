import React from 'react';
import { useNavigate } from 'react-router';

const   HomePage = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={()=>navigate('/signin')} className='btn btn-primary btn-lg'>Sign in</button>
            <button onClick={()=>navigate('/login')} className='btn btn-success btn-lg'>Log in</button>
        </div>
    );
}

export default HomePage;
