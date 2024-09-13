import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='Header_holder'>
        <div className='desktop'> <Header />   </div>

        <div className='mobile'><Navbar /></div>

      </header>

    </>
  )
}

export default App
