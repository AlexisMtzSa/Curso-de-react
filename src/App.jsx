import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import LoginPage from './pages/auth/LoginPage'
import HomePage from './pages/home/HomePage'
import RegisterPage from './pages/auth/RegisterPage'
import ProfilePage from './pages/profile/ProfilePage'
import NotFoundPage from './pages/404/NotFoundPage'

function App() {

  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [logged, setLogged] = useState(false);

  //Returns false if the user was registered
  function registerUser(newUser){

    let userExist = false

    for(let user of registeredUsers){
      if(newUser.email==user.email){
        userExist = true
        break
      }
    }

    if(!userExist){
      let copyRegisteredUsers = [...registeredUsers]
      copyRegisteredUsers.push(newUser)
      setRegisteredUsers(copyRegisteredUsers)
      alert('User registered succesfully')
    }
    else
      alert('User already exists')

    return userExist
      
  }
  
  function logUser(user){

    for(let registeredUser of registeredUsers){
      if(user.email ==registeredUser.email && user.password==registeredUser.password){
        setLogged(true)
        break
      }
    }        

    return logged

  }

  function logOut(){
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    setLogged(false)
}

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/login' element={<LoginPage logUser={logUser}/>}/>
          <Route exact path='/signin' element={<RegisterPage registerUser={registerUser}/>}/>
          <Route exact path='/profile' element={logged?<ProfilePage logOut={logOut}/>:<NotFoundPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </Router>
    </div>
    
    
  )
}

export default App
