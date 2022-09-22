import React, {useEffect, useState} from 'react'
import { getAllPagedUsers, getAllusers, getUserDetails, login } from '../../services/fetchService';


export default function FetchExample() {

    const [users, setUsers] = useState([]);
    const [pages, setPages] = useState(2);
    const [totalUsers, setTotalUsers] = useState(12);
    const [usersPerPage, setUsersPerPage] = useState(6);
    const [selectedUser, setSelectedUser] = useState();

    const obtainUsers = () =>{
        getAllusers()
        .then((response)=> {
            console.log('All users',response.data)
            setUsers(response.data)
            setPages(response.total_pages)
            setTotalUsers(response.total)
            setUsersPerPage(response.per_page)
        })
        .catch((error)=> alert('Error while retreiving the users ', error))
        .finally(()=>{
            console.log('Ended obtaining users:')
            console.table(users)
        })
    }

    const obtainPagedUsers = (page) =>{
        getAllPagedUsers(page)
        .then((response)=> {
            console.log('All paged users',response.data)
            setUsers(response.data)
        })
        .catch((error)=> alert('Error while retreiving the users ', error))
        .finally(()=>{
            console.log('Ended obtaining users:')
            console.table(users)
        })
    }

    const obtainUserDetails = id =>{
        getUserDetails(id)
        .then((response)=> {
            console.log('All paged users',response.data)
            setSelectedUser(response.data)
        })
        .catch((error)=> alert('Error while retreiving the user ', error))
        .finally(()=>{
            console.log('Ended obtaining user:')
            console.table(selectedUser)
        })
    }

    const authUser = () =>{
        login('eve.holt@reqres.in', 'cityslicka')
        .then((response)=> {
            console.log('TOKEN:',response.token)
            sessionStorage.setItem('token', response.token)
        })
        .catch((error)=> alert('Error while logining the user ', error))
        .finally(()=> console.log('Ended logining user:'))
    }

    useEffect(() => obtainUsers(), []);

  return (
    <div>
        {/*Boton que simula el login*/}
        <button onClick={authUser}>Auth user</button>

        <h2>Users:</h2>
        {users.map((user, index)=><p style={{cursor: 'pointer'}} key={index} onClick={()=>obtainUserDetails(user.id)}>
                {user.first_name}
                {' '+user.last_name}
            </p>
        )}

        <p>Showing {usersPerPage} users of {totalUsers}</p>
        <button onClick={()=>obtainPagedUsers(1)}>1</button>
        <button onClick={()=>obtainPagedUsers(2)}>2</button>

        <div>
            <h3>User details</h3>
            {selectedUser != null?(
            <div>
                <p>Name: {selectedUser.first_name}</p>
                <p>Last name: {selectedUser.last_name}</p>
                <p>Email: {selectedUser.email}</p>
                <img alt='Avatar' src={selectedUser.avatar} style={{height: '150px', width: '150px'}}></img>
            </div>
        ):
        <h6>Please click on a user to see its details</h6>
        }
        </div>
        

    </div>
  )
}
