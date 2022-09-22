import React from 'react';
import { useNavigate } from 'react-router';

const   HomePage = () => {

    const navigate = useNavigate()

    const navigateProps = (path) =>{
        navigate(path+'?online=true',
            {
                state: {
                    online: true
                }})
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={()=>navigateProps('/onlineState')}>Go to state query params</button>
            <button onClick={()=>navigate('/profile')}>Go to profile</button>
        </div>
    );
}

export default HomePage;
