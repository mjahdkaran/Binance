import { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'; import './Navbar.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddTaskIcon from '@mui/icons-material/AddTask';
import MenuItem from '../MenuItem/menuItem';

interface HeaderProps {
    toggle: () => void; // Function type for the toggle function
    isDarkModeOn: boolean; // Boolean type for dark mode status
}
export default function Navbar({ toggle, isDarkModeOn }: HeaderProps) {
    const [isShowMenu, setIsShowMenu] = useState(false)
    const showToggle = () => {
        setIsShowMenu(prev => !prev)

    }
    const menuClass = isShowMenu ? 'show' : '';
    const themeClass = isDarkModeOn ? 'dark' : 'light';
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
                        sx={{ color: themeClass }} /> :
                        <MenuRoundedIcon
                            onClick={showToggle}
                            sx={{ color: themeClass }} />}

                </div>


            </div>
            <div className={`left_menu ${menuClass} ${themeClass}`}>
                <div className='button_holder'>
                    <button className={`button login ${isDarkModeOn ? '' : 'loginlight'}`} style={{ width: '45%' }} >Log In</button>
                    <button className='button signup' style={{ width: '45%' }} >Sign Up</button></div>
                <ul className={`left_menu_list ${themeClass}`}>
                    <MenuItem icon={MonetizationOnIcon} title='Markets' isDarkModeOn />
                    <MenuItem icon={AddCircleIcon} title='Trade' isDarkModeOn />
                    <MenuItem icon={AddTaskIcon} title='Derivatives' isDarkModeOn />
                </ul>
            </div>
        </>

    )
}
