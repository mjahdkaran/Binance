import React from 'react';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ContrastIcon from '@mui/icons-material/Contrast';
import MenuItem from '../MenuItem/MenuItem';
import SwitchButton from '../SwitchButton/SwitchButton';

interface LeftMenuProps {
    isDarkModeOn: boolean;
    toggle: () => void;
    menuClass: string;
    themeClass: string;
}

const LeftMenu: React.FC<LeftMenuProps> = ({ isDarkModeOn, toggle, menuClass, themeClass }) => {
    return (
        <div className={`left_menu ${menuClass} ${themeClass}`}>
            <div className='button_holder'>
                <button className={`button login ${isDarkModeOn ? '' : 'loginlight'}`} style={{ width: '45%' }}>Log In</button>
                <button className='button signup' style={{ width: '45%' }}>Sign Up</button>
            </div>
            <ul className={`left_menu_list ${themeClass}`}>
                <MenuItem icon={MonetizationOnIcon} title='Markets' isDarkModeOn={isDarkModeOn} />
                <MenuItem icon={AddCircleIcon} title='Trade' isDarkModeOn={isDarkModeOn} />
                <MenuItem icon={AddTaskIcon} title='Derivatives' isDarkModeOn={isDarkModeOn} />
                <div className='theme_holder'>
                    <MenuItem icon={ContrastIcon} title='Theme' isDarkModeOn={isDarkModeOn} />
                    <SwitchButton isDarkModeOn={isDarkModeOn} toggle={toggle} />
                </div>
            </ul>
        </div>
    );
};

export default LeftMenu;