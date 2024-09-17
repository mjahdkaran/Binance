import React from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightIcon from '@mui/icons-material/Nightlight';
import './SwitchButton.css'

interface SwitchButtonProps {
    isDarkModeOn: boolean;
    toggle: () => void;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ isDarkModeOn, toggle }) => {
    const themeClass = isDarkModeOn ? 'dark' : 'light';

    return (
        <div className='switchbutton_holder'>
            <button
                id='sun'
                onClick={toggle}
                className={`switchbutton ${themeClass}`}
            >
                <WbSunnyIcon sx={isDarkModeOn ? { fontSize: 16, color: '#ffff' } : { fontSize: 16, color: 'gray' }} />
            </button>
            <button
                id='moon'
                onClick={toggle}
                className={`switchbutton ${themeClass}`}
            >
                <NightlightIcon sx={isDarkModeOn ? { fontSize: 16, color: 'gray' } : { fontSize: 16, color: 'black' }} />
            </button>
        </div>
    );
};

export default SwitchButton;