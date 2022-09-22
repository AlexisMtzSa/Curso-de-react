import React from 'react';
import Button from '@mui/material/Button';
import Copyright from '../../components/pure/Copyright';
import { useNavigate } from 'react-router';


const DashBoardPage = () => {

    const navigate = useNavigate()
    
    const logout = () =>{
        navigate('/login')
    }

    return (
        <div>
            <Button variant='containted' onClick={logout}>Logout</Button>
            <Copyright/>
        </div>
    );
}

export default DashBoardPage;
