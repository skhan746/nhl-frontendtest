import React from 'react'
import Featurebox from './Featurebox'


import trees from '../images/trees.png'
import svm from '../images/analysis.png'
import tree from '../images/tree.png'
import neighbor from '../images/village.png'
import LR from '../images/linear-regression.png'
import simple from '../images/connector.png'
import complex from '../images/deep-learning.png'



function Feature() {
  return (
    
    <div id='features'>
        <h1>Machine Learning Models</h1>
        <div className='a-container'>
            
            <Featurebox image={trees} title="Random Forest Model" />
            <Featurebox image={svm} title="Support Vector Machines (Bagging)" />
            <Featurebox image={tree} title="Decision Tree (Bagging)" />
            <Featurebox image={neighbor} title="K Nearest Neighbours" />
            {/* <Featurebox image={LR} title="Logistic Regression (Bagging)" />
            <Featurebox image={simple} title="Simple Multilayer Perceptron" />
            <Featurebox image={complex} title="Complex Multilayer Perceptron" />
  */}
        
        </div>


        
    </div>
    
  )
}

export default Feature