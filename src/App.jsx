import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import JokesPage from './pages/JokesPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <JokesPage/>
    </div>
  )
}

export default App
