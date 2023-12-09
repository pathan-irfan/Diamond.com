import React,{useState} from 'react'
import "./Women.css"
import { Link } from 'react-router-dom'
import gc1 from "./womenwatch/gc1.webp"
import gc2 from "./womenwatch/gc2.webp"
import gc3 from "./womenwatch/gc3.webp"
import gc4 from "./womenwatch/gc1.webp"
import gc5 from './womenwatch/gc2.webp'
import g1 from "./womenwatch/g1.jpg"
import g2 from "./womenwatch/g2.jpg"
import g3 from "./womenwatch/g3.jpg"
import g4 from "./womenwatch/g4.jpg"
import g5 from "./womenwatch/g5.jpg"
import gg1 from "./womenwatch/gg1.jpg"
import gg2 from "./womenwatch/gg2.jpg"
import gg3 from "./womenwatch/gg3.jpg"
import gg4 from "./womenwatch/gg4.jpg"
import gg5 from "./womenwatch/gg5.jpg"
import gww1 from "./womenwatch/gww1.jpg"
import gww2 from "./womenwatch/gww2.jpg"
import gww3 from "./womenwatch/gww3.jpg"
import gww4 from "./womenwatch/gww4.jpg"
import gww5 from "./womenwatch/gww5.jpg"
import ga1 from "./womenwatch/ga1.jpg"
import ga2 from "./womenwatch/ga2.jpg"
import ga3 from "./womenwatch/ga3.jpg"
import ga4 from "./womenwatch/ga1.jpg"
import ga5 from "./womenwatch/ga2.jpg"


function WomenWatch({ addToCart }) {
const images =[gc1,gc2,gc3,gc4,gc5]
const images1 =[g1,g2,g3,g4,g5]
const images2 =[gg1,gg2,gg3,gg4,gg5]
const images3 =[gww1,gww2,gww3,gww4,gww5]
const images4 =[ga1,ga2,ga3,ga4,ga5]

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
  name: "fossil watch", // You can change this to the actual product name
  price: 7500, // You can change this to the actual product price
  src: images[imindex],
};
addToCart(selectedItem);
};
const handleAddToCart4 = () => {
const selectedItem = {
  name: "Annel klein", // You can change this to the actual product name
  price: 42140, // You can change this to the actual product price
  src: images4[imindex4],
};
addToCart(selectedItem);
};

const handleAddToCart1 = () => {
const selectedItem = {
  name: "Annel klein", // You can change this to the actual product name
  price: 8540, // You can change this to the actual product price
  src: images1[imindex1],
};
addToCart(selectedItem);
};
const handleAddToCart2 = () => {
const selectedItem = {
  name: "Annel klein", // You can change this to the actual product name
  price: 10540, // You can change this to the actual product price
  src: images2[imindex2],
};
addToCart(selectedItem);
};
const handleAddToCart3 = () => {
const selectedItem = {
  name: "Annel klein", // You can change this to the actual product name
  price: 12140, // You can change this to the actual product price
  src: images3[imindex3],
};
addToCart(selectedItem);
};
  return (
    <div>
       <div id='mainDiv' >
      <div id='pragrphAndImgParent'>
      <div id='bigimageDiv' >
        
       <img id='BigDivofBigImages' src={images[imindex]} alt="..." /> 
     </div>

      <div>
      <p style={{fontWeight:"800",fontSize:"30px",marginLeft:"8px",color:"red"}}>UP TO  40% OFF </p> 
      <p className='product-paragraph'>Moddel:fossil </p> 
      <p className='product-paragraph'>Price :$75,00 </p>
      <p className='product-paragraph'>color : black </p>
      <p className='product-paragraph'>fetures :100% water proof <br/> 1 year battery life lite wight and strong  </p>
      </div>
      </div>
{/* ////////////////////////////////////////// */}


     <div id='SmallImgParentDiv'>
      <div id='BigImageDiv'>
        <img  className="bigImage"src={gc1}  onClick={()=>sendim(0)} alt='...'/>
      </div>
      <div className='SmallImagDiv' >
      <img  src={gc1}  onClick={()=>sendim(1)} alt='...'className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={gc2}  onClick={()=>sendim(2)} alt='...' className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={gc3}  onClick={()=>sendim(3)} alt='...' className="SmallImage" />

      </div>
      <div className='SmallImagDiv' >
      <img  src={gc5}  onClick={()=>sendim(4)} alt='...' className="SmallImage" />
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
        <img  className="bigImage"src={g1}  onClick={()=>sendim1(0)} alt='...'/>
      </div>
      <div className='SmallImagDiv' >
      <img  src={g2}  onClick={()=>sendim1(1)} alt='...'className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={g3}  onClick={()=>sendim1(2)} alt='...' className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={g4}  onClick={()=>sendim1(3)} alt='...' className="SmallImage" />

      </div>
      <div className='SmallImagDiv' >
      <img  src={g5}  onClick={()=>sendim1(4)} alt='...' className="SmallImage" />
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
        <img  className="bigImage"src={gg1}  onClick={()=>sendim2(0)} alt='...'/>
      </div>
      <div className='SmallImagDiv' >
      <img  src={gg2}  onClick={()=>sendim2(1)} alt='...'className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={gg3}  onClick={()=>sendim2(2)} alt='...' className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={gg4}  onClick={()=>sendim2(3)} alt='...' className="SmallImage" />

      </div>
      <div className='SmallImagDiv' >
      <img  src={gg5}  onClick={()=>sendim2(4)} alt='...' className="SmallImage" />
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
        <img  className="bigImage"src={gww1}  onClick={()=>sendim3(0)} alt='...'/>
      </div>
      <div className='SmallImagDiv' >
      <img  src={gww2}  onClick={()=>sendim3(1)} alt='...'className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={gww3}  onClick={()=>sendim3(2)} alt='...' className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={gww4}  onClick={()=>sendim3(3)} alt='...' className="SmallImage" />

      </div>
      <div className='SmallImagDiv' >
      <img  src={gww5}  onClick={()=>sendim3(4)} alt='...' className="SmallImage" />
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
        <img  className="bigImage"src={ga1}  onClick={()=>sendim4(0)} alt='...'/>
      </div>
      <div className='SmallImagDiv' >
      <img  src={ga2}  onClick={()=>sendim4(1)} alt='...'className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={ga3}  onClick={()=>sendim4(2)} alt='...' className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={ga4}  onClick={()=>sendim4(3)} alt='...' className="SmallImage" />

      </div>
      <div className='SmallImagDiv' >
      <img  src={ga5}  onClick={()=>sendim4(4)} alt='...' className="SmallImage" />
     </div>
      
      </div>
      <Link to="/bybutton">  <button id='By-now-button'>By now </button></Link>

      <button id="Add-to-card-button" onClick={handleAddToCart4} >Add to card</button>
    </div>
    </div>
  )
}

export default WomenWatch
