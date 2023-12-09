import React from 'react'
import "./buybutton.css"
function BuyButton() {
  const handleButtonClick = () => {
    // Replace this URL with the actual Google Pay app deep link
    const googlePayAppUrl = 'https://google.com';

    // Open Google Pay app or redirect to Google Pay website
    window.open(googlePayAppUrl, '_blank');
  };

  return (
    <center> <div id='mainbox'>
    <h1 style={{color:"white"}}>Welcome to the diamond.com</h1>
      <p style={{color:"white"}}>Click the button below to open Google Pay:</p>
      <button id='btn' onClick={handleButtonClick}>Open Google Pay</button>
    </div>
    </center> 

  );
}


  


export default BuyButton
