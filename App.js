
import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
//import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light'); //whether dark is enabled or false

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#051546";
  } 
  else{
    setMode('light');
    document.body.style.backgroundColor="white";
    }
 }

  return (
    <>    
      {/*<Navbar title="TextUtils" aboutText="About Title" /> */}
        <Navbar mode={mode} toggleMode={toggleMode} /> 
        <div className='container my-3'>
        <TextForm heading="Enter your text here" mode={mode}/>
        </div>
    </>
  );
}

export default App;
