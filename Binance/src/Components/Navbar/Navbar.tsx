import React, { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import './Navbar.css'

interface HeaderProps {
    toggle: () => void; // Function type for the toggle function
    isDarkModeOn: boolean; // Boolean type for dark mode status
}
export default function Navbar({ toggle, isDarkModeOn }: HeaderProps) {
    const [isShowMenu, setIsShowMenu] = useState(false)
    const showToggle = () => {
        setIsShowMenu(prev => !prev)
    }
    return (
        <>
            <div className='navbar_holder '
            // 'Navbar_holder'
            >
                <div className='navbar_left'>
                    <img className='nav_logo' src="./images/binance.png" alt="Binance" />

                </div>
                <div className='navbar_right'>
                    {isShowMenu ? <CloseRoundedIcon
                        onClick={showToggle}
                        sx={{ color: isDarkModeOn ? 'var(--lightColor)' : 'var(--darkColor)' }} /> :
                        <MenuRoundedIcon
                            onClick={showToggle}
                            sx={{ color: isDarkModeOn ? 'var(--lightColor)' : 'var(--darkColor)' }} />}

                </div>


            </div>
            <div className={isShowMenu ? 'left_menu show' : 'left_menu'}>1</div>
        </>

    )
}
