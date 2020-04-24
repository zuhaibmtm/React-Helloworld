import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Message from './Components/Message'

function App() {
  return (
    <div className="App">
      <Message/>

       {/* <Greet name = 'Bruce' heroName = 'Batman'>
        <p>this is children</p>
      </Greet>
      <Greet name = 'Clark' heroName = 'Super Man'>
        <button>Action</button>
        </Greet>
      <Greet name = 'Diana' heroName = 'Wonder Woman'/>
      <Welcome/> */}
    </div>
  );
}

export default App;
