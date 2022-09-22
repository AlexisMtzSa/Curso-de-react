import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom'

const AboutPage = () => {

    const location = useLocation()
    const navigate = useNavigate()

    return (
        <div>
            <h1>
                About | FAQS
            </h1>
            <button onClick={()=>navigate('/')}>Go to gome</button>
            <button onClick={()=>navigate(-1)}>Go back</button>
        </div>
    );
}

export default AboutPage;
