import '../../styles/index.scss';

import logo from '../../assets/logo.svg'

export function Header() {
    return(
        <header>
            <div className="divLogo">
                <img className='logoKenzie' src={logo} alt='Logo Kenzie' />
            </div>
        </header>
    );
};