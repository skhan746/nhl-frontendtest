import React from 'react'; 
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Feature from './Components/Feature';
import Chatbot from './pages/Chatbot';
import How from './Components/How';
import Members from './Components/Members';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <How/>
      <Feature/>
      <Members/>
      
    </div>
  );
}

export default App;
