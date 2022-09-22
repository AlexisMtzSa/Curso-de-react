import { BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import HomePage from './pages/home/HomePage'
import NotFoundPage from './pages/404/NotFoundPage'
import AboutPage from './pages/about-page/Aboutpage'
import ProfilePage from './pages/profile/ProfilePage'
import TaskListComponent from './components/container/task_list'
import TaskDetailPage from './tasks/TaskDetailPage'
import LoginPage from './pages/auth/LoginPage'
import StatePage from './pages/home/StatePage'

function AppRoutingOne() {

  const [logged, setLogged] = useState(false);
  let email, password = null

  let taskList =[
    {
      id: 1,
      name: 'Task 1',
      description: 'My first task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second task'
    }
  ]

  useEffect(() => {
    email = localStorage.getItem('email')
    if(email!=null){
      password = localStorage.getItem('password')
      setLogged(true)
    }
  }, []);

  return (
    <div className="App">
        <Router>
          <div>
            <aside>
              <Link to='/'>| HOME |</Link>
              <Link to='/about'>| ABOUT |</Link>
              <Link to='/faqs'>| FAQS |</Link>
              <Link to='/login'>| LOGIN |</Link>
              <Link to='/task/1'>| TASK 1 |</Link>
              <Link to='/task/2'>| TASK 2 |</Link>
              <Link to='/404'>| Not existing route |</Link>
            </aside>

            <main>
              <Routes>
                <Route exact path='/' element={<HomePage/>}/>
                <Route exact path='/onlineState' element={<StatePage/>}/>
                <Route path='/login' element={logged?<Navigate to='/'/>:<LoginPage/>}/>
                <Route path='/faqs' element={<AboutPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/profile' element={logged? <ProfilePage/>:<Navigate to='/login'/>}/>
                <Route path='/tasks' element={<TaskListComponent/>}/>
                <Route path='task/:id' element={<TaskDetailPage tasks={taskList}/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
              </Routes>
            </main>

          </div>

          
        </Router>
    </div>
  )
}

export default AppRoutingOne
