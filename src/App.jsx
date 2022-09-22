import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Rectangle from './components/Rectangle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Rectangle></Rectangle>
    </div>
  )
}

export default App
