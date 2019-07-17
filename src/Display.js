import React, { useEffect, useState } from "react";
import axios from "axios"

//This is where I will have my image coming from Nasa

function Display() {
const [displayState, setDisplayState] = useState();

useEffect(() => {
 axios
 .get(`https://api.nasa.gov/planetary/apod?api_key=1ZFEYgwsgQ3qmkNxvlmqkpfDv8huXslH2zgWx8bd`)
 .then(repsonse => {
     const spacePic = reponse.data.message;
     console.log('nasa api:', spacePic);
     setDisplayState(spacePic);
 });
}, [])
    return(
        <div>

        </div>
    )
}
export default Display;