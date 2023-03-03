//how.jsx
import React from 'react'
import Featurebox from './Featurebox'
import{Link} from 'react-router-dom';

import earth from '../images/earth.png'
import stats from '../images/statistics.png'

function How() {
  return (
    <div id='how'>
      <div id='features'>
      <h1>How it Works</h1>
      <div className='a-container'>
      <Link to={'/jupyter'}>
        <Featurebox image={stats} title="Data Analysis" />
      </Link>
      <a href="/NHL_Draft.pdf" target="_blank" rel="noopener noreferrer">
        <Featurebox image={earth} title="Academic Paper" />
      </a>
 
    </div>


    
    </div>

  </div>

  )
}

export default How