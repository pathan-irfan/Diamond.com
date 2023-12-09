import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import "./new.css"
import rd1 from "./newimages/rd1.webp"
import rd2 from "./newimages/rd2.webp"
import rd3 from "./newimages/rd3.webp"
import rd4 from "./newimages/rd4.webp"
import rd5 from './newimages/rd2.webp'
import c1 from "./newimages/c1.avif"
import c2 from "./newimages/c2.avif"
import c3 from "./newimages/c3.avif"
import c4 from "./newimages/c4.avif"
import c5 from "./newimages/c1.avif"
import r1 from "./newimages/r1.webp"
import r2 from "./newimages/r2.webp"
import r3 from "./newimages/r3.webp"
import r4 from "./newimages/r1.webp"
import r5 from "./newimages/r3.webp"
import d1 from "./newimages/d1.webp"
import d2 from "./newimages/d2.webp"
import d3 from "./newimages/d3.webp"
import d4 from "./newimages/d4.webp"
import d5 from "./newimages/d5.webp"
import dd1 from "./newimages/dd1.webp"
import dd2 from "./newimages/dd2.avif"
import dd3 from "./newimages/dd3.avif"
import dd4 from "./newimages/dd4.avif"
import dd5 from "./newimages/dd5.avif"




function New({ addToCart }) {

const images =[rd1,rd2,rd3,rd4,rd5]
const images1 =[c1,c2,c3,c4,c5]
const images2 =[r1,r2,r3,r4,r5]
const images3 =[d1,d2,d3,d4,d5]
const images4 =[dd1,dd2,dd3,dd4,dd5]



const[imindex,setimIndex]=useState(0)
const[imindex1,setimIndex1]=useState(0)
const[imindex2,setimIndex2]=useState(0)
const[imindex3,setimIndex3]=useState(0)
const[imindex4,setimIndex4]=useState(0)



const sendim=(index)=>{
    setimIndex(index)
}
const sendim4=(index)=>{
  setimIndex4(index)
}
const sendim1=(index1)=>{
  setimIndex1(index1)
}
const sendim2=(index2)=>{
  setimIndex2(index2)
}
const sendim3=(index2)=>{
  setimIndex3(index2)
}

const handleAddToCart = () => {
  const selectedItem = {
    name: "fastrack watch", // You can change this to the actual product name
    price: 7500, // You can change this to the actual product price
    src: images[imindex],
  };
  addToCart(selectedItem);
};
const handleAddToCart4 = () => {
  const selectedItem = {
    name: "Rado watch", // You can change this to the actual product name
    price: 42140, // You can change this to the actual product price
    src: images4[imindex4],
  };
  addToCart(selectedItem);
};

const handleAddToCart1 = () => {
  const selectedItem = {
    name: "casio watch", // You can change this to the actual product name
    price: 8540, // You can change this to the actual product price
    src: images1[imindex1],
  };
  addToCart(selectedItem);
};
const handleAddToCart2 = () => {
  const selectedItem = {
    name: "rado watch", // You can change this to the actual product name
    price: 10540, // You can change this to the actual product price
    src: images2[imindex2],
  };
  addToCart(selectedItem);
};
const handleAddToCart3 = () => {
  const selectedItem = {
    name: "rado watch", // You can change this to the actual product name
    price: 12140, // You can change this to the actual product price
    src: images3[imindex3],
  };
  addToCart(selectedItem);
};
  return (
    <>
    <div id='mainDiv' >
      <div id='pragrphAndImgParent'>
      <div id='bigimageDiv' >
        
       <img id='BigDivofBigImages' src={images[imindex]} alt="..." /> 
     </div>

      <div>
      <p style={{fontWeight:"800",fontSize:"30px",marginLeft:"8px",color:"red"}}>UP TO  40% OFF </p> 
      <p className='product-paragraph'>Moddel:Rado watch </p> 
      <p className='product-paragraph'>Price :$75,00 </p>
      <p className='product-paragraph'>color : black </p>
      <p className='product-paragraph'>fetures :100% water proof <br/> 1 year battery life lite wight and strong  </p>
      </div>
      </div>
{/* ////////////////////////////////////////// */}


     <div id='SmallImgParentDiv'>
      <div id='BigImageDiv'>
        <img  className="bigImage"src={rd1}  onClick={()=>sendim(0)} alt='...'/>
      </div>
      <div className='SmallImagDiv' >
      <img  src={rd1}  onClick={()=>sendim(1)} alt='...'className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={rd2}  onClick={()=>sendim(2)} alt='...' className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={rd3}  onClick={()=>sendim(3)} alt='...' className="SmallImage" />

      </div>
      <div className='SmallImagDiv' >
      <img  src={rd5}  onClick={()=>sendim(4)} alt='...' className="SmallImage" />
     </div>
      
      </div>
      <Link to="/bybutton">  <button id='By-now-button'>By now </button></Link>

      <button id="Add-to-card-button"onClick={handleAddToCart} >Add to card</button>
    </div>
    {/* /////////////////////////////////second div ///////////////////////////////////////////// */}
    <div id='mainDiv1' >
      <div id='pragrphAndImgParent'>
      <div id='bigimageDiv' >
       <img id='BigDivofBigImages' src={images1[imindex1]} alt="..." /> 
     </div>

      <div>
      <p style={{fontWeight:"800",fontSize:"30px",marginLeft:"8px",color:"red"}}>UP TO  30% OFF </p> 
      <p className='product-paragraph'>Moddel:Casio watch </p> 
      <p className='product-paragraph'>Price :$85,40 </p>
      <p className='product-paragraph'>color : 4 color available</p>
      <p className='product-paragraph'>fetures :100% water proof <br/> 1 year battery life lite wight and strong  </p>
      </div>
      </div>
{/* ////////////////////////////////////////// */}


     <div id='SmallImgParentDiv'>
      <div id='BigImageDiv'>
        <img  className="bigImage"src={c1}  onClick={()=>sendim1(0)} alt='...'/>
      </div>
      <div className='SmallImagDiv' >
      <img  src={c2}  onClick={()=>sendim1(1)} alt='...'className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={c3}  onClick={()=>sendim1(2)} alt='...' className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={c4}  onClick={()=>sendim1(3)} alt='...' className="SmallImage" />

      </div>
      <div className='SmallImagDiv' >
      <img  src={c5}  onClick={()=>sendim1(4)} alt='...' className="SmallImage" />
     </div>
      
      </div>
      <Link to="/bybutton">  <button id='By-now-button'>By now </button></Link>

      <button id="Add-to-card-button" onClick={handleAddToCart1} >Add to card</button>
    </div>
{/* /////////////////////////////////////////therd Div here //////////////////////////////////////////////////// */}
<div id='mainDiv1' >
      <div id='pragrphAndImgParent'>
      <div id='bigimageDiv' >
       <img id='BigDivofBigImages' src={images2[imindex2]} alt="..." /> 
     </div>

      <div>
      <p style={{fontWeight:"800",fontSize:"30px",marginLeft:"8px",color:"red"}}>UP TO  33% OFF </p> 
      <p className='product-paragraph'>Moddel:rado watch </p> 
      <p className='product-paragraph'>Price :$105,40 </p>
      <p className='product-paragraph'>color : 4 color available</p>
      <p className='product-paragraph'>fetures :100% water proof <br/> 1 year battery life lite wight and strong  </p>
      </div>
      </div>
{/* ////////////////////////////////////////// */}


     <div id='SmallImgParentDiv'>
      <div id='BigImageDiv'>
        <img  className="bigImage"src={r1}  onClick={()=>sendim2(0)} alt='...'/>
      </div>
      <div className='SmallImagDiv' >
      <img  src={r2}  onClick={()=>sendim2(1)} alt='...'className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={r3}  onClick={()=>sendim2(2)} alt='...' className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={r4}  onClick={()=>sendim2(3)} alt='...' className="SmallImage" />

      </div>
      <div className='SmallImagDiv' >
      <img  src={r5}  onClick={()=>sendim2(4)} alt='...' className="SmallImage" />
     </div>
      
      </div>
      <Link to="/bybutton">  <button id='By-now-button'>By now </button></Link>

      <button id="Add-to-card-button" onClick={handleAddToCart2} >Add to card</button>
    </div>

{/* /////////////////////////////////forth div here ///////////////////////////////////////////////// */}
<div id='mainDiv1' >
      <div id='pragrphAndImgParent'>
      <div id='bigimageDiv' >
       <img id='BigDivofBigImages' src={images3[imindex3]} alt="..." /> 
     </div>

      <div>
      <p style={{fontWeight:"800",fontSize:"30px",marginLeft:"8px",color:"red"}}>UP TO  13% OFF </p> 
      <p className='product-paragraph'>Moddel:rado watch </p> 
      <p className='product-paragraph'>Price :$121,40 </p>
      <p className='product-paragraph'>color : 4 color available</p>
      <p className='product-paragraph'>fetures :100% water proof <br/> 1 year battery life lite wight and strong  </p>
      </div>
      </div>
{/* ////////////////////////////////////////// */}


     <div id='SmallImgParentDiv'>
      <div id='BigImageDiv'>
        <img  className="bigImage"src={d1}  onClick={()=>sendim3(0)} alt='...'/>
      </div>
      <div className='SmallImagDiv' >
      <img  src={d2}  onClick={()=>sendim3(1)} alt='...'className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={d3}  onClick={()=>sendim3(2)} alt='...' className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={d4}  onClick={()=>sendim3(3)} alt='...' className="SmallImage" />

      </div>
      <div className='SmallImagDiv' >
      <img  src={d5}  onClick={()=>sendim3(4)} alt='...' className="SmallImage" />
     </div>
      
      </div>
      <Link to="/bybutton">  <button id='By-now-button'>By now </button></Link>

      <button id="Add-to-card-button" onClick={handleAddToCart3} >Add to card</button>
    </div>
    {/* /////////////////////////////////fifth div here ///////////////////////////////////////////////// */}
<div id='mainDiv1' >
      <div id='pragrphAndImgParent'>
      <div id='bigimageDiv' >
       <img id='BigDivofBigImages' src={images4[imindex4]} alt="..." /> 
     </div>

      <div>
      <p style={{fontWeight:"800",fontSize:"30px",marginLeft:"8px",color:"red"}}>UP TO  2% OFF </p> 
      <p className='product-paragraph'>Moddel:rado watch </p> 
      <p className='product-paragraph'>Price :$421,40 </p>
      <p className='product-paragraph'>color : 4 color available</p>
      <p className='product-paragraph'>fetures :100% water proof <br/> 1 year battery life lite wight and strong  </p>
      </div>
      </div>
{/* ////////////////////////////////////////// */}


     <div id='SmallImgParentDiv'>
      <div id='BigImageDiv'>
        <img  className="bigImage"src={dd1}  onClick={()=>sendim4(0)} alt='...'/>
      </div>
      <div className='SmallImagDiv' >
      <img  src={dd2}  onClick={()=>sendim4(1)} alt='...'className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={dd3}  onClick={()=>sendim4(2)} alt='...' className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={dd4}  onClick={()=>sendim4(3)} alt='...' className="SmallImage" />

      </div>
      <div className='SmallImagDiv' >
      <img  src={dd5}  onClick={()=>sendim4(4)} alt='...' className="SmallImage" />
     </div>
      
      </div>
      <Link to="/bybutton">  <button id='By-now-button'>By now </button></Link>

      <button id="Add-to-card-button" onClick={handleAddToCart4} >Add to card</button>
    </div>
</>
  )
}

export default New
