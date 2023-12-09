import "./style.css"
import cr from "./images/shoping icon.png"
import {Link } from "react-router-dom"
import React,{useState} from "react";
function Navbaar (props){

 
 
   const[colour,setColour]=useState('')
   const[light,setLight]=useState(<i class="fa-solid fa-sun"></i>)
   const change=()=>{
        if(colour==="black"){
          setColour(document.body.style.backgroundColor="white")
           setLight(<i class="fa-solid fa-sun"></i>)
        }else{
          setColour(document.body.style.backgroundColor="black"
          )
          setLight(<i class="fa-solid fa-moon"></i>)


        }
   }
  const handleInputChange = (event) => {
    // Call the first onChange function
    props.onCha(event);

    // Call the second onChange function
    props.vL(event);
  };

   return(
        
        <div >
         <div id="navbaar" className="" >
           <Link to="/" className="Link"><p>Home</p></Link>
          <Link to="/kids" className="Link"><p>Kids</p></Link>
          <Link to="new" className="Link"><p>New </p></Link>
          <Link to="/api"  id="inli"><input type="text" placeholder="serch Brand name and Watch" className="input" onKeyPress={props.fu} onChange={handleInputChange} onClick={props.p1}  /></Link> 
                 
           
           
           <Link to="/order"><img src={cr} alt="" id="img"/> </Link>  
           
          <Link to="/login" id="btn2"><button className="btn3" onClick={props.s1}> { props.si1}</button></Link> 
          <Link to="/welcome"><div>{props.s2}</div>  </Link>
          <button onClick={change} className="darkmod" style={{backgroundColor:colour}}>{light} </button>
           
           {props.p2}

         </div>





         
          </div>
    )

}export default Navbaar