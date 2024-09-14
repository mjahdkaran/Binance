import React, { useState } from 'react'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './Header.css'


export default function Header() {


    return (
        <>
            <header className='Header' >

                <div className='Header_left'>
                    <img className='logo' src="./images/binance.png" alt="" />
                    <ul className='Header_left_list'>
                        <li>Markets</li>
                        <li>Trade</li>
                        <li>Derivatives</li>
                        <li>More ...</li>

                    </ul>
                </div>


                <div className='Header_right'>
                    <button className='button login'>Log In</button>
                    <button className='button signup'>Sign Up</button>
                    <WbSunnyIcon
                        // onClick={clickHandler}
                        sx={{
                            //  color: isDarkModeOn ? '#fff' : '#0000', 
                            '&:hover': { color: 'var(--textHover)' }
                        }} />
                </div>

            </header>

        </>
    )
}

