import React, {useState} from 'react';
import logo from '../images/k.png';

import{Link} from 'react-router-dom';



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
            <Link to='#' className= 'logo'>
                <img src={logo} alt=''/>
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to='/chatbot'>Chat with DraftAI-Bot</Link></li>
                <li><Link to='/tester'>ML Models Used</Link></li>
                <li><Link to='#'>How it Works</Link></li>
                <li><Link to='#'>About</Link></li>
            </ul>


        </nav>
  
  )
}

export default Navbar