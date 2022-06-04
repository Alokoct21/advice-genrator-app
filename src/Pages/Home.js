import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import '../Styles/Home.css';

function AdviceGentrator() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.adviceslip.com/advice`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error : The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData.slip.advice);
      })
      
  }, []);

  return (
      <div className="container">
          
          <div className="advice">
          <p>Advice</p>
              <h3>‶{data}”</h3>
              <button onClick={()=>{window.location.reload(false)}} >New Advice</button>
              </div>


      </div>
  )
}

export default AdviceGentrator;
