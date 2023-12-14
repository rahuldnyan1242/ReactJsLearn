import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import Footer from './components/Footer';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, SetMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
  }

  const toggleStyleMode = (value)=> {
    if(mode === 'light') {
      SetMode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark mode is enabled", "success");
    }else {
      SetMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
    }
  }

  const handleColorChange = (color) => {
    console.log("Color :: ", color);
    SetMode(color);
    document.body.style.backgroundColor = color;
  };

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleStyleMode={toggleStyleMode} handleColorChange={handleColorChange} />
      <Alert alert={alert} />
      <Routes>
        <Route exact path='/' element={<TextForm showAlert={showAlert} heading='Enter your text to analyze:' mode={mode} />} />          
        <Route exact path='/about' element={<About />} /> 
      </Routes>
      {/* <Footer /> */}
    </Router>
    </>
  );
}

export default App;
