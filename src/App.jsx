import { useState } from 'react'
import './App.css';
import Cong from './Pages/Cong';
// import Router from './Router/Router';
// import Router from './Router/Router';
import Router from './Router/Router';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
  <Router/>
  <Cong/>
  </>
  )
}

export default App
