import React from "react";
import "./longin.css"
import { Link } from "react-router-dom";
function Longing(){

return(
    <>
 <center>   
    
    <div id="longindiv">
    <h1 style={{color:'gray'}}>Sing In or Log In </h1>
   <Link to="/logpage"> <button className="towbtn"  >Log In </button></Link><br/>
   <Link to="/singin"> <button  className="towbtn" >Sing In  </button></Link>
    <p style={{color:'gray'}}>Continuous with Google </p>
    </div>
    
    </center>
    </>
)

}

export default Longing