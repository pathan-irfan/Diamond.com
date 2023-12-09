import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import "./new.css"
import sb1 from "./smartWtch/sb1.webp"
import sb2 from "./smartWtch/sb2.webp"
import sb3 from "./smartWtch/sb3.webp"
import sb4 from "./smartWtch/sb4.webp"
import sb5 from './smartWtch/sb5.webp'
import ssl1 from "./smartWtch/ssl1.webp"
import ssl2 from "./smartWtch/ssl2.webp"
import ssl3 from "./smartWtch/ssl3.webp"
import ssl4 from "./smartWtch/ssl4.webp"
import ssl5 from "./smartWtch/ssl5.webp"
import sm1 from "./smartWtch/sm1.webp"
import sm2 from "./smartWtch/sm2.webp"
import sm3 from "./smartWtch/sm3.webp"
import sm4 from "./smartWtch/sm4.webp"
import sm5 from "./smartWtch/sm5.webp"
import sy1 from "./smartWtch/sy1.webp"
import sy2 from "./smartWtch/sy2.webp"
import sy3 from "./smartWtch/sy3.png"
import sy4 from "./smartWtch/sy4.webp"
import sy5 from "./smartWtch/sy5.webp"
import so1 from "./smartWtch/so1.webp"
import so2 from "./smartWtch/so2.webp"
import so3 from "./smartWtch/so3.webp"
import so4 from "./smartWtch/so4.webp"
import so5 from "./smartWtch/so5.webp"

function ScrollImagesList({addToCart}) {

  const images =[sb1,sb2,sb3,sb4,sb5]
  const images1 =[ssl1,ssl2,ssl3,ssl4,ssl5]
  const images2 =[sm1,sm2,sm3,sm4,sm5]
  const images3 =[sy1,sy2,sy3,sy4,sy5]
  const images4 =[so1,so2,so3,so4,so5]
  
  
  
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
      name: "smart  watch", // You can change this to the actual product name
      price: 5500, // You can change this to the actual product price
      src: images[imindex],
    };
    addToCart(selectedItem);
  };
  
  
  const handleAddToCart1 = () => {
    const selectedItem = {
      name: "smart watch", // You can change this to the actual product name
      price: 4240, // You can change this to the actual product price
      src: images1[imindex1],
    };
    addToCart(selectedItem);
  };
  const handleAddToCart2 = () => {
    const selectedItem = {
      name: "smart watch", // You can change this to the actual product name
      price: 6040, // You can change this to the actual product price
      src: images2[imindex2],
    };
    addToCart(selectedItem);
  };
  const handleAddToCart3 = () => {
    const selectedItem = {
      name: "rado watch", // You can change this to the actual product name
      price: 6540, // You can change this to the actual product price
      src: images3[imindex3],
    };
    addToCart(selectedItem);
  };
  const handleAddToCart4 = () => {
    const selectedItem = {
      name: "smart watch", // You can change this to the actual product name
      price: 6640, // You can change this to the actual product price
      src: images4[imindex4],
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
      <p className='product-paragraph'>Moddel:smart watch </p> 
      <p className='product-paragraph'>Price :$55,00 </p>
      <p className='product-paragraph'>color : black </p>
      <p className='product-paragraph'>fetures :100% water proof <br/> 1 year battery life lite wight and strong  </p>
      </div>
      </div>
{/* ////////////////////////////////////////// */}


     <div id='SmallImgParentDiv'>
      <div id='BigImageDiv'>
        <img  className="bigImage"src={sb1}  onClick={()=>sendim(0)} alt='...'/>
      </div>
      <div className='SmallImagDiv' >
      <img  src={sb1}  onClick={()=>sendim(1)} alt='...'className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={sb2}  onClick={()=>sendim(2)} alt='...' className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={sb3}  onClick={()=>sendim(3)} alt='...' className="SmallImage" />

      </div>
      <div className='SmallImagDiv' >
      <img  src={sb5}  onClick={()=>sendim(4)} alt='...' className="SmallImage" />
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
      <p className='product-paragraph'>Moddel:smart watch </p> 
      <p className='product-paragraph'>Price :$42,40 </p>
      <p className='product-paragraph'>color : 4 color available</p>
      <p className='product-paragraph'>fetures :100% water proof <br/> 1 year battery life lite wight and strong  </p>
      </div>
      </div>
{/* ////////////////////////////////////////// */}


     <div id='SmallImgParentDiv'>
      <div id='BigImageDiv'>
        <img  className="bigImage"src={ssl1}  onClick={()=>sendim1(0)} alt='...'/>
      </div>
      <div className='SmallImagDiv' >
      <img  src={ssl2}  onClick={()=>sendim1(1)} alt='...'className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={ssl3}  onClick={()=>sendim1(2)} alt='...' className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={ssl4}  onClick={()=>sendim1(3)} alt='...' className="SmallImage" />

      </div>
      <div className='SmallImagDiv' >
      <img  src={ssl5}  onClick={()=>sendim1(4)} alt='...' className="SmallImage" />
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
      <p className='product-paragraph'>Moddel:smart watch </p> 
      <p className='product-paragraph'>Price :$60,40 </p>
      <p className='product-paragraph'>color : 4 color available</p>
      <p className='product-paragraph'>fetures :100% water proof <br/> 1 year battery life lite wight and strong  </p>
      </div>
      </div>
{/* ////////////////////////////////////////// */}


     <div id='SmallImgParentDiv'>
      <div id='BigImageDiv'>
        <img  className="bigImage"src={sm1}  onClick={()=>sendim2(0)} alt='...'/>
      </div>
      <div className='SmallImagDiv' >
      <img  src={sm2}  onClick={()=>sendim2(1)} alt='...'className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={sm3}  onClick={()=>sendim2(2)} alt='...' className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={sm4}  onClick={()=>sendim2(3)} alt='...' className="SmallImage" />

      </div>
      <div className='SmallImagDiv' >
      <img  src={sm5}  onClick={()=>sendim2(4)} alt='...' className="SmallImage" />
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
      <p className='product-paragraph'>Price :$65,40 </p>
      <p className='product-paragraph'>color : 4 color available</p>
      <p className='product-paragraph'>fetures :100% water proof <br/> 1 year battery life lite wight and strong  </p>
      </div>
      </div>
{/* ////////////////////////////////////////// */}


     <div id='SmallImgParentDiv'>
      <div id='BigImageDiv'>
        <img  className="bigImage"src={sy1}  onClick={()=>sendim3(0)} alt='...'/>
      </div>
      <div className='SmallImagDiv' >
      <img  src={sy2}  onClick={()=>sendim3(1)} alt='...'className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={sy3}  onClick={()=>sendim3(2)} alt='...' className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={sy4}  onClick={()=>sendim3(3)} alt='...' className="SmallImage" />

      </div>
      <div className='SmallImagDiv' >
      <img  src={sy5}  onClick={()=>sendim3(4)} alt='...' className="SmallImage" />
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
      <p className='product-paragraph'>Moddel:smart watch </p> 
      <p className='product-paragraph'>Price :$66,40 </p>
      <p className='product-paragraph'>color : 4 color available</p>
      <p className='product-paragraph'>fetures :100% water proof <br/> 1 year battery life lite wight and strong  </p>
      </div>
      </div>
{/* ////////////////////////////////////////// */}


     <div id='SmallImgParentDiv'>
      <div id='BigImageDiv'>
        <img  className="bigImage"src={so1}  onClick={()=>sendim4(0)} alt='...'/>
      </div>
      <div className='SmallImagDiv' >
      <img  src={so2}  onClick={()=>sendim4(1)} alt='...'className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={so3}  onClick={()=>sendim4(2)} alt='...' className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={so4}  onClick={()=>sendim4(3)} alt='...' className="SmallImage" />

      </div>
      <div className='SmallImagDiv' >
      <img  src={so5}  onClick={()=>sendim4(4)} alt='...' className="SmallImage" />
     </div>
      
      </div>
      <Link to="/bybutton">  <button id='By-now-button'>By now </button></Link>

      <button id="Add-to-card-button" onClick={handleAddToCart4} >Add to card</button>
    </div>
    </div>
  )
}

export default ScrollImagesList
