import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TaskListComponent from './components/container/task_list'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TaskListComponent></TaskListComponent>
    </div>
  )
}

export default App
