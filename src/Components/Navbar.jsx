//Navbar.jsx
import React, {useState} from 'react';
import { Link as LinkScroll } from 'react-scroll';
import logo from '../images/k.png';






import{ Link } from 'react-router-dom';



function Navbar() {

    const [nav,setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >=50){
            setnav(true);
        }
        else {
            setnav(false);
        }
    }
    window.addEventListener('scroll',changeBackground);


    return (
        <nav class="bootstrap-disabled" className={nav ? "nav active" : "nav"}> 
            <LinkScroll to='main' smooth={true} offset={70} duration={500} className= 'logo'>
                <img src={logo} alt=''/>
            </LinkScroll>
            <input className='menu-btn' type='checkbox' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to='/chatbot'>Chat with DraftAI-Bot</Link></li>
                <li>
                    <LinkScroll
                    to='how'
                    smooth={true}
                    offset={70}
                    duration={500}>
                        How it Works
                    </LinkScroll>
                </li>
                <li>
                    <LinkScroll
                    to='mlmodels'
                    smooth={true}
                    offset={-90}
                    duration={500}>
                        ML Models Used
                    </LinkScroll>
                </li>
                <li>
                    <LinkScroll
                    to='members'
                    smooth={true}
                    offset={70}
                    duration={500}>
                        Team Members
                    </LinkScroll>
                </li>
            </ul>
        </nav>
  )
}

export default Navbar