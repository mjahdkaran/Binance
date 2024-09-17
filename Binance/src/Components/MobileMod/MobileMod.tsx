import { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import './MobileMod.css';
import LeftMenu from '../LeftMenu/LeftMenu';

interface HeaderProps {
    toggle: () => void;
    isDarkModeOn: boolean;
}

export default function MobileMod({ toggle, isDarkModeOn }: HeaderProps) {
    const [isShowMenu, setIsShowMenu] = useState(false);
    const showToggle = () => {
        setIsShowMenu(prev => !prev);
    };

    const menuClass = isShowMenu ? 'show' : '';
    const themeClass = isDarkModeOn ? 'dark' : 'light';

    return (
        <>
            <div className='navbar_holder'>
                <div className='navbar_left'>
                    <img className='nav_logo' src="./images/binance.png" alt="Binance" />
                </div>
                <div className='navbar_right'>
                    {isShowMenu ? (
                        <CloseRoundedIcon onClick={showToggle} sx={{ color: themeClass }} />
                    ) : (
                        <MenuRoundedIcon onClick={showToggle} sx={{ color: themeClass }} />
                    )}
                </div>
            </div>
            <LeftMenu isDarkModeOn={isDarkModeOn} toggle={toggle} menuClass={menuClass} themeClass={themeClass} />
            <div>hello</div>
        </>
    );
}