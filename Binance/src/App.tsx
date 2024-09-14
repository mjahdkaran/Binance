

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import { useState } from 'react'

function App() {
  const [isDarkModeOn, setIsDarkModeOn] = useState(true)
  const toggleDarkModeOn = () => {
    setIsDarkModeOn(prev => !prev)

  }

  return (
    <>
      <header className={isDarkModeOn ? 'Header_holder dark' : 'Header_holder light'} >
        <div className='desktop'>
          <Header />
        </div>

        <div className='mobile'><Navbar /></div>

      </header>

    </>
  )
}

export default App
