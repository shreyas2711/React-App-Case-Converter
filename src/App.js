import React from 'react'
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";




function App() {
  const [mode,setMode]=useState('light')
  // const [modetext,setmodetext]=useState('Enable dark mode')
  const  [alert, setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
  })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
    
  }



  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      // setmodetext('Dark Mode')
      document.body.style.backgroundColor='#042743'
      // document.style.color='dark'
      showAlert("Dark mode has been activated","Success")  
    }
    else{
      setMode('light')
      // setmodetext('Light Mode')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been activated","Success")  
    }
  }
  return (
   <>
   {/* <Router> */}
<Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert} mode={mode}/>
<div className="container my-3">
{/* <Switch> */}
          {/* <Route path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          
          {/* </Route> */}
        {/* </Switch> */}
  </div>
 {/* </Router> */}
   </>
  
  );
}

export default App;
