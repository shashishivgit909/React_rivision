import { useState } from 'react'
// import './App.css'
import Shashi from './shashi';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1> hello world</h1>
   <Shashi/>
    </>
  )
}

export default App;