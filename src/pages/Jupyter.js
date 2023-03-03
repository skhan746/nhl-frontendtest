import React from 'react'


 

function Jupyter() {

  const handleBack = () => {
    window.history.back();
  };
  return (
    <div>
      <iframe title="nhl draft" src={"./NHL.html"} style={{ width: '100%', height: '750px' }}></iframe>
  </div>
  
  )
}

export default Jupyter



