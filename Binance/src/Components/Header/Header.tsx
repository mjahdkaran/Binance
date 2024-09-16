
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightIcon from '@mui/icons-material/Nightlight';
import './Header.css';

interface HeaderProps {
    toggle: () => void; // Function type for the toggle function
    isDarkModeOn: boolean; // Boolean type for dark mode status
}
export default function Header({ toggle, isDarkModeOn }: HeaderProps) {


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
                    <button className={isDarkModeOn ? 'button login' : 'button login loginlight'} >Log In</button>
                    <button className='button signup' >Sign Up</button>
                    {isDarkModeOn ? <NightlightIcon
                        onClick={toggle}
                        sx={{
                            color: 'var(--lightColor)',
                            '&:hover': { color: 'var(--hoverColor)' }
                        }} /> :
                        <WbSunnyIcon
                            onClick={toggle}
                            sx={{
                                color: 'var(--darkColor)',
                                '&:hover': { color: 'var(--hoverColor)' }
                            }} />}

                </div>

            </header>

        </>
    )
}

