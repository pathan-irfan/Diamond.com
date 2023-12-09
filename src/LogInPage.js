import React from "react";
import './LogInPage.css'
import { Link } from "react-router-dom";
function LogInPage() {
  return (
   <center> <div id="pagelogin">
        <h1 style={{color:"gray"}}> Wel come to the Log In page</h1>
         <lable htmlFor="Email ID " style={{color:"gray"}}>Email ID</lable> <br></br>
        <input type="text" name="email id " placeholder="Email ID" className="input11"/><br/>
        <lable htmlFor="Email ID " style={{color:"gray"}}>Password</lable> <br></br>
        <input type="password" name="email id " placeholder="password" className="input11"/><br></br>
      <Link to=""> <button className="logbtn" >Log In </button></Link> 
      
    </div>
    </center>
  )
}

export default LogInPage
