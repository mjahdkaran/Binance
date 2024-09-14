import React from 'react'
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
                </div>

            </header>

        </>
    )
}

