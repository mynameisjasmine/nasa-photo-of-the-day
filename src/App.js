import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Header";
import DisplayCard from "./DisplayCard"

function App() {
  const [nasa, setDisplayState] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=1ZFEYgwsgQ3qmkNxvlmqkpfDv8huXslH2zgWx8bd`)
      .then(response => {
        console.log('response data:', response.data)
        setDisplayState(response.data)

      })
      .catch(err => console.log(err));
  }, [])
  return (
    <div className="App">
    <img className="rocket-pic" src="images/rocket.png" alt="picture of rocket"></img>
      <p>
        DAILY SPACE PHOTO
        
      </p>
      <Header
        title={nasa.title} 
        date={nasa.date}
        />
        
        <DisplayCard
        
        pic={nasa.url} />

      <div></div>

    </div>
  );
}

export default App;
