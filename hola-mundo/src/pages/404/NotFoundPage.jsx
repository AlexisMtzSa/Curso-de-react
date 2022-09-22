import React from 'react';
import { useNavigate } from 'react-router';

const NotFoundPage = () => {

    const navigate = useNavigate()

    return (
        <div>
            <h1>404 Page Not Found</h1>
            <button onClick={()=>navigate('/')}>Go to home</button>
        </div>
    );
}

export default NotFoundPage;
