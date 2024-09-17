

import './App.css'
import PcMode from './Components/PcMode/PcMode'
import MobileMod from './Components/MobileMod/MobileMod'
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
          <PcMode toggle={toggleDarkModeOn} isDarkModeOn={isDarkModeOn} />
        </div>

        <div className='mobile'><MobileMod toggle={toggleDarkModeOn} isDarkModeOn={isDarkModeOn} /></div>

      </header>

    </div>
  )
}

export default App
