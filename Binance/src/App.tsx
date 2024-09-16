

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import { useState } from 'react'


function App() {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false)
  const toggleDarkModeOn = () => {
    setIsDarkModeOn(prev => !prev)

  }

  return (
    <div style={{ height: '100vh' }}
      className={isDarkModeOn ? 'dark' : 'light'}
    >
      <header className={isDarkModeOn ? 'Header_holder dark' : 'Header_holder light'} >
        <div className='desktop'>
          <Header toggle={toggleDarkModeOn} isDarkModeOn={isDarkModeOn} />
        </div>

        <div className='mobile'><Navbar toggle={toggleDarkModeOn} isDarkModeOn={isDarkModeOn} /></div>

      </header>

    </div>
  )
}

export default App
