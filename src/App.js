import React from 'react'; 
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Feature from './Components/Feature';
import Chatbot from './pages/Chatbot';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Feature/>
      
    </div>
  );
}

export default App;
