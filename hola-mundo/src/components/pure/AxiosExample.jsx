import React, {useEffect, useState} from 'react';
import getRandomUser from '../../utils/axios-service';

const AxiosExample = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        obtainRandomUser()
    }, []);

    const obtainRandomUser = () => {
        getRandomUser()
            .then(response=>{
                if(response.status==200)
                    setUser(response.data.results[0])
                console.log(response)
                })
            .catch(error=>alert('Something went wrong ', error))
    }

    return (
        <div>
            <h1>Axios Example</h1>
            {user!=null?
                (
                    <div>
                        <img alt='Avatar' src={user.picture.large}></img>
                        <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
                        <h3>{user.email}</h3>
                    </div>
                )
            :
                (
                    <div>
                        <h2>Genereta new user</h2>
                        <button onClick={obtainRandomUser}>Random user</button>
                    </div>
                )
            }
        </div>
    );
}

export default AxiosExample;
