
import React,{useState}from 'react';
import { Link } from 'react-router-dom';
import "./Kids.css"
import sp1 from "./KidsImages/sp1.webp"
import sp2 from "./KidsImages/sp100.webp"
import sp3 from "./KidsImages/sp200.webp"
import sp4 from "./KidsImages/sp300.webp"
import sp5 from './KidsImages/sp400.webp'
import dr1 from "./KidsImages/sp2.jpg"
import dr2 from "./KidsImages/dr1.jpg"
import dr3 from "./KidsImages/dr4.jpg"
import dr4 from "./KidsImages/dr3.jpg"
import dr5 from "./KidsImages/dr5.jpg"
import p1 from "./KidsImages/sp4.jpg"
import p2 from "./KidsImages/p1.jpg"
import p3 from "./KidsImages/p2.jpg"
import p4 from "./KidsImages/p3.jpg"
import p5 from "./KidsImages/p5.jpg"
import b1 from "./KidsImages/sp5.webp"
import b2 from "./KidsImages/b1.webp"
import b3 from "./KidsImages/b2.webp"
import b4 from "./KidsImages/b3.webp"
import b5 from "./KidsImages/b4.webp"
import y1 from "./KidsImages/sp7.webp"
import y2 from "./KidsImages/y1.webp"
import y3 from "./KidsImages/y2.webp"
import y4 from "./KidsImages/y3.webp"
import y5 from "./KidsImages/y4.webp"


function Kids({ addToCart }) {
  const images =[sp1,sp2,sp3,sp4,sp5]
const images1 =[dr1,dr2,dr3,dr4,dr5]
const images2 =[p1,p2,p3,p4,p5]
const images3 =[b1,b2,b3,b4,b5]
const images4 =[y1,y2,y3,y4,y5]



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
    name: "spaider man watch", // You can change this to the actual product name
    price: 300, // You can change this to the actual product price
    src: images[imindex],
  };
  addToCart(selectedItem);
};
const handleAddToCart4 = () => {
  const selectedItem = {
    name: "dorimon watch", // You can change this to the actual product name
    price: 540, // You can change this to the actual product price
    src: images4[imindex4],
  };
  addToCart(selectedItem);
};

const handleAddToCart1 = () => {
  const selectedItem = {
    name: "princes watch", // You can change this to the actual product name
    price: 340, // You can change this to the actual product price
    src: images1[imindex1],
  };
  addToCart(selectedItem);
};
const handleAddToCart2 = () => {
  const selectedItem = {
    name: "smart kid watch", // You can change this to the actual product name
    price: 1140, // You can change this to the actual product price
    src: images2[imindex2],
  };
  addToCart(selectedItem);
};
const handleAddToCart3 = () => {
  const selectedItem = {
    name: "car watch", // You can change this to the actual product name
    price: 440, // You can change this to the actual product price
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
      <p style={{fontWeight:"800",fontSize:"30px",marginLeft:"8px",color:"red"}}>UP TO  20% OFF </p> 
      <p className='product-paragraph'>Moddel:spaider man  watch </p> 
      <p className='product-paragraph'>Price :$300 </p>
      <p className='product-paragraph'>color : red </p>
      <p className='product-paragraph'>fetures :not water proof <br/> 1 year battery life lite wight and strong  </p>
      </div>
      </div>
{/* ////////////////////////////////////////// */}


     <div id='SmallImgParentDiv'>
      <div id='BigImageDiv'>
        <img  className="bigImage"src={sp1}  onClick={()=>sendim(0)} alt='...'/>
      </div>
      <div className='SmallImagDiv' >
      <img  src={sp1}  onClick={()=>sendim(1)} alt='...'className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={sp2}  onClick={()=>sendim(2)} alt='...' className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={sp3}  onClick={()=>sendim(3)} alt='...' className="SmallImage" />

      </div>
      <div className='SmallImagDiv' >
      <img  src={sp5}  onClick={()=>sendim(4)} alt='...' className="SmallImage" />
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
      <p className='product-paragraph'>Moddel:dorimon watch </p> 
      <p className='product-paragraph'>Price :$540 </p>
      <p className='product-paragraph'>color : 4 color available</p>
      <p className='product-paragraph'>fetures :10% water proof <br/> 1 year battery life lite wight and strong  </p>
      </div>
      </div>
{/* ////////////////////////////////////////// */}


     <div id='SmallImgParentDiv'>
      <div id='BigImageDiv'>
        <img  className="bigImage"src={dr1}  onClick={()=>sendim1(0)} alt='...'/>
      </div>
      <div className='SmallImagDiv' >
      <img  src={dr2}  onClick={()=>sendim1(1)} alt='...'className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={dr3}  onClick={()=>sendim1(2)} alt='...' className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={dr4}  onClick={()=>sendim1(3)} alt='...' className="SmallImage" />

      </div>
      <div className='SmallImagDiv' >
      <img  src={dr5}  onClick={()=>sendim1(4)} alt='...' className="SmallImage" />
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
      <p style={{fontWeight:"800",fontSize:"30px",marginLeft:"8px",color:"red"}}>UP TO  23% OFF </p> 
      <p className='product-paragraph'>Moddel:princes watch </p> 
      <p className='product-paragraph'>Price :$340 </p>
      <p className='product-paragraph'>color : 4 color available</p>
      <p className='product-paragraph'>fetures :3% water proof <br/> 1 year battery life lite wight and strong  </p>
      </div>
      </div>
{/* ////////////////////////////////////////// */}


     <div id='SmallImgParentDiv'>
      <div id='BigImageDiv'>
        <img  className="bigImage"src={p1}  onClick={()=>sendim2(0)} alt='...'/>
      </div>
      <div className='SmallImagDiv' >
      <img  src={p2}  onClick={()=>sendim2(1)} alt='...'className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={p3}  onClick={()=>sendim2(2)} alt='...' className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={p4}  onClick={()=>sendim2(3)} alt='...' className="SmallImage" />

      </div>
      <div className='SmallImagDiv' >
      <img  src={p5}  onClick={()=>sendim2(4)} alt='...' className="SmallImage" />
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
      <p style={{fontWeight:"800",fontSize:"30px",marginLeft:"8px",color:"red"}}>UP TO  10% OFF </p> 
      <p className='product-paragraph'>Moddel:smart kid watch </p> 
      <p className='product-paragraph'>Price :$1140 </p>
      <p className='product-paragraph'>color : 4 color available</p>
      <p className='product-paragraph'>fetures :30% water proof <br/> 1 year battery life lite wight and strong  </p>
      </div>
      </div>
{/* ////////////////////////////////////////// */}


     <div id='SmallImgParentDiv'>
      <div id='BigImageDiv'>
        <img  className="bigImage"src={b1}  onClick={()=>sendim3(0)} alt='...'/>
      </div>
      <div className='SmallImagDiv' >
      <img  src={b2}  onClick={()=>sendim3(1)} alt='...'className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={b3}  onClick={()=>sendim3(2)} alt='...' className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={b4}  onClick={()=>sendim3(3)} alt='...' className="SmallImage" />

      </div>
      <div className='SmallImagDiv' >
      <img  src={b5}  onClick={()=>sendim3(4)} alt='...' className="SmallImage" />
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
      <p className='product-paragraph'>Moddel:Car watch </p> 
      <p className='product-paragraph'>Price :$440 </p>
      <p className='product-paragraph'>color : 4 color available</p>
      <p className='product-paragraph'>fetures :10% water proof <br/> 1 year battery life lite wight and strong  </p>
      </div>
      </div>
{/* ////////////////////////////////////////// */}


     <div id='SmallImgParentDiv'>
      <div id='BigImageDiv'>
        <img  className="bigImage"src={y1}  onClick={()=>sendim4(0)} alt='...'/>
      </div>
      <div className='SmallImagDiv' >
      <img  src={y2}  onClick={()=>sendim4(1)} alt='...'className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={y3}  onClick={()=>sendim4(2)} alt='...' className="SmallImage"/>

      </div>
      <div className='SmallImagDiv' >
      <img  src={y4}  onClick={()=>sendim4(3)} alt='...' className="SmallImage" />

      </div>
      <div className='SmallImagDiv' >
      <img  src={y5}  onClick={()=>sendim4(4)} alt='...' className="SmallImage" />
     </div>
      
      </div>
      <Link to="/bybutton">  <button id='By-now-button'>By now </button></Link>

      <button id="Add-to-card-button" onClick={handleAddToCart4} >Add to card</button>
    </div>

   

  
</>
  )
}

export default Kids
