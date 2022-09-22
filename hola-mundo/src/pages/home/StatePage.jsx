import React from 'react';
import { useLocation } from 'react-router';

const StatePage = () => {

    const location = useLocation()

    console.log('Location state:',location.state.online)
    console.log('Query param:',location.search)

    return (
        <div>
            <h1>State: {location.state.online? 'The user is online': 'The user is offline'}</h1>
        </div>
    );
}

export default StatePage;
