import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Header";
import Logo from "./Logo"
import DisplayCard from "./DisplayCard"

function App() {
  const [nasa, setNasa] = useState({});
 console.log("nasa:", nasa)
  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => {
        console.log('response data:', response.data)
        setNasa(response.data)
         //
      })
      .catch(err => console.log(err));
  }, [])
  console.log("nasa2:", nasa)
  return (
    <div className="App">
      <Logo />
      
        <h1>NASA DAILY SPACE PHOTO</h1>

      
      <Header
        title={nasa.title}
        date={nasa.date}
      />

      <DisplayCard

        pic={nasa.hdurl}
        description={nasa.explanation} 
        />

      

    </div>
  );
}

export default App;
