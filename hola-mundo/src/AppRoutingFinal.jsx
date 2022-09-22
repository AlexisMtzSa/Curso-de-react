
import { BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom'
import NotFoundPage from './pages/404/NotFoundPage'
import LoginPage from './pages/auth/LoginPage'
import DashBoardPage from './pages/dashboard/DashBoard'

function AppRoutingFinal() {

  //TODO Change value from sessionStorage
  let loggedIn = true

  return (
    <div className="App">
       <Router>
        <Routes>
          {/*Redirections to protect our routes */}
          <Route exact path='' element={loggedIn?<Navigate to='/dashboard'/>:<Navigate to='/login'/>}/>

          {/*Login route */}
          <Route exact path='/login' element={<LoginPage/>}/>
          {/*Dashboard route */}
          <Route exact path='/dashboard' element={loggedIn?<DashBoardPage/>:<Navigate to='/login'/>}/>
          <Route element={<NotFoundPage/>}/>
        </Routes>
       </Router>
    </div>
  )
}

export default AppRoutingFinal
