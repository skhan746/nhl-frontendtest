import React from 'react';


function Header() {
  return (
    <div id='main'>
        <div className='name'>
            <h2>Combining</h2>
            <h1><span>Hockey </span>with Artificial Intelligence</h1>
            <p className='details'>Using Machine Learning to predict your chance of getting drafted to the NHL!</p>
            <div className='header-btns'>
                <a href="/chatbot" className='header-btn'>Try it out</a>
            </div>
        </div>

    </div>
  )
}

export default Header