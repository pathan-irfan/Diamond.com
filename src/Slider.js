import React, { useState } from "react";
import "./slider.css";
import { Link } from "react-router-dom";

import im1 from "./sliderImages/rd1.jpg";
import im2 from "./sliderImages/im7.jpg";
import im3 from "./sliderImages/sd2.jpg";
import im4 from "./sliderImages/sd3.webp";
import im5 from "./sliderImages/new4.jpg";
import im6 from "./sliderImages/new2.avif";
/////////////////////////////////////////

function Slider(props) {
  const images = [im1, im2, im3, im4, im5, im6];
  const [slid, setSlid] = useState(0);

  const previous = () => {
    setSlid((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const next = () => {
    setSlid((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <>
      <div id="main">
      {props.pr}
        <img src={images[slid]} className="wtimg" alt="..." />
      </div>

      <button className="btn" onClick={previous}>
        &lt;
      </button>
      <button className="btn1" onClick={next}>
        &gt;
      </button>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
             <center><h1>new products </h1></center>l
      <div className="AllsmallWatch">
        <Link to="/new" className="fistWatch">
          <div watchimagediv>
            <div className="child"></div>
          </div>
        </Link>

        <Link to="/new" className="fistWatch">
          <div watchimagediv>
            <div className="child1"></div>
          </div>
        </Link>

        <Link to="/new" className="fistWatch">
          <div watchimagediv>
          <div className="child2"></div>

          </div>
        </Link>
        <Link to="/new" className="fistWatch">
          <div watchimagediv>
          <div className="child3"></div>

          </div>
        </Link>
        <Link to="/new" className="fistWatch">
          <div watchimagediv>
          <div className="child4"></div>

          </div>
        </Link>
        <Link to="/new" className="fistWatch">
          <div watchimagediv>
          <div className="child5"></div>

          </div>
        </Link>
      </div>
{/*///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
     <center style={{marginTop:'0%'}}><h1>  </h1></center>
      <Link to="/scrollList"> <div id="scrollSlider">
           
           <div className="scrollchild child-one  ">
          
           </div>
           <div className="scrollchild child-one2 " ></div>
          <div className="scrollchild child-one3" ></div> 
           <div className="scrollchild child-one4 "  ></div>
           <div className="scrollchild child-one5 "  ></div> 
           <div className="scrollchild child-one6 "  ></div>
           <div className="scrollchild child-one7 "  ></div>
           <div className="scrollchild child-one8 "  ></div>
           <div className="scrollchild child-one9 "  ></div>
          
          
        </div></Link> 
{/*///////////////////////////////////%U"L://///////////////////////////////////////////////////////////////*/}
<center><h1>Kids Watch  </h1></center>

<Link to="/kids">
  <div id="thirdWatchdiv">
    <div className="thirdchild">
     
      <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcROBp8W3ZtuDggdNYAzUZxz52zgqunzF1xYn738DnlIK_dxSV93Yatfe0IVdmG0SqQuewewPjY4uYWkJCFLACh0V3ywXlv-ZgaFmR89cmsd4uXaUNI04td5vA" alt="pathan" className="thardimg"/>
      <p className="pra1" style={{}}> up to 40% off  <span style={{fontWeight:"50",color:"white"}}>[spaider watch]</span></p>
      <p className="pra" style={{ color:"gray"}}>price 30,0 /- </p>  
       </div>
    <div className="thirdchild">
    <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRbN1tCRBIBN7NS-BldrJlBr68kwcTJR2yUiTCzU17Jb6_BUrgOiEygeDEtMhVIGQ-WnXjkx9BoHoaKxvMow2LcMuqzssmPc4DRN0pdKlfJlpeJi7Lz9sw8HA" alt="pathan" className="thardimg"/>
      <p className="pra1" style={{}}> up to 40% off   <span style={{fontWeight:"50",color:"white"}}>[dorimon ]</span>    </p>
      <p className="pra" style={{color:"gray" }}>price 540 /- </p>  
    </div>
    <div className="thirdchild">
    <img src="https://m.media-amazon.com/images/I/71Z1z3Sgt9L._UX679_.jpg" alt="pathan" className="thardimg"/>
      <p className="pra1" style={{}}> up to 20% off    <span style={{fontWeight:"50",color:"white"}}>[princes]</span>   </p>
      <p className="pra" style={{color:"gray" }}>price 340/- </p>  
    </div>
    <div className="thirdchild">
    <img src="https://m.media-amazon.com/images/I/611OEwh7WkL.jpg" alt="pathan" className="thardimg"/>
      <p className="pra1" style={{}}> up to 20% off    <span style={{fontWeight:"50",color:"white"}}>[ben10]</span>   </p>
      <p className="pra" style={{ color:"gray"}}>price 340 /- </p>  
    </div>
    <div className="thirdchild">
    <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT8cAhfv8f6rV6ZuK0_WKNJJg8UYABapZKKzuU7xukHSURvc16mTAoxPdSlUSWdBysoZFhXZ1FuCYFtm6PVq4Xgk6DWrnP4bpeOhbj3CKJSHgHvJXug1tq42g" alt="pathan" className="thardimg"/>
      <p className="pra1" style={{}}> up to 30% off     <span style={{fontWeight:"50",color:"white"}}>[smart watch]</span>  </p>
      <p className="pra" style={{ color:"gray"}}>price 11,40 /- </p>  
    </div>
    <div className="thirdchild">
    <img style={{}} src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcScmzJ5RlNjnbWLbHG95aDtphJTwRuI2gwBt_1zApXLZ_rbpMABFewYZ_f0jo3rd-LPoYFLOdhfWIta3P78vQeUgO4z_DvrsivO36PWNLBmj2VWuTUxxYlZctA" alt="pathan" className="thardimg" />
      <p className="pra1" style={{}}> up to 12% off      <span style={{fontWeight:"50",color:"white"}}>[car]</span> </p>
      <p className="pra" style={{ color:"gray"}}>price 440 /- </p>  
    </div>
  </div>
  </Link>
  {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
  <center><h1>Women  Watch  </h1></center>

  <Link to="/women">
  <div id="thirdWatchdiv1">
    <div className="thirdchild1"><img src="https://www.swisstimehouse.com/143393-thickbox_default/fossil-es4727-i.webp" alt="pathan" className="thardimg1"/>
      <p className="pra1" style={{}}> up to 30% off     <span style={{fontWeight:"50",color:"white"}}>[fossil]</span>  </p>
      <p className="pra" style={{color:"gray" }}>price 2,000 /- </p>   </div>

    <div className="thirdchild1">
    <img src="https://cdn.helioswatchstore.com/production/media/catalog/product/cache/9c673d416a32c881249d1a12a3016fe5/a/k/ak2512terg_1.jpg" alt="pathan" className="thardimg1"/>
      <p className="pra1" style={{}}> up to 40% off     <span style={{fontWeight:"50",color:"white"}}>[Annel Clein ]</span>  </p>
      <p className="pra" style={{ color:"gray"}}>price 36,000 /- </p>  
    </div>
    <div className="thirdchild1">
    <img src="https://cdn.helioswatchstore.com/production/media/catalog/product/cache/dd1c3400e344f54d12df823ec560a116/a/k/ak1363gnsv_1.jpg" alt="pathan" className="thardimg1"/>
      <p className="pra11" style={{}}> up to 40% off     <span style={{fontWeight:"50",color:"white"}}>[Annel Clein]</span>  </p>
      <p className="pra12" style={{color:"gray" }}>price 12,000 /- </p>  
    </div>
    <div className="thirdchild1">
    <img src="https://cdn.helioswatchstore.com/production/media/catalog/product/cache/dd1c3400e344f54d12df823ec560a116/9/5/95136qm01_1.jpg" alt="pathan" className="thardimg1"/>
      <p className="pra11" style={{}}> up to 40% off     <span style={{fontWeight:"50",color:"white"}}>[Annel Clein]</span>  </p>
      <p className="pra12" style={{color:"gray" }}>price 55,000 /- </p>  
    </div>
    <div className="thirdchild1">
    <img src="https://cdn.helioswatchstore.com/production/media/catalog/product/cache/dd1c3400e344f54d12df823ec560a116/a/k/ak1980gngb_1.jpg" alt="pathan" className="thardimg1"/>
      <p className="pra11" style={{}}> up to 40% off     <span style={{fontWeight:"50",color:"white"}}>[Annel Clein]</span>  </p>
      <p className="pra12" style={{ color:"gray"}}>price 77,000 /- </p>  
    </div>
    <div className="thirdchild1">
    <img src="https://cdn.helioswatchstore.com/production/media/catalog/product/cache/dd1c3400e344f54d12df823ec560a116/a/r/ar11419_1.jpg" alt="pathan" className="thardimg1"/>
      <p className="pra11" > up to 40% off    <span style={{fontWeight:"50",color:"white"}}> [Annel Clein]</span>   </p>
      <p className="pra" style={{color:"gray" }}>price 16,500 /- </p>  
    </div>
  </div>
  </Link>
   <div id="footer">

  <div  id='contact'>
      
  <p className="contactUS">Contact  </p>
  <p className="contactUS">City</p>
 
  <p className="contactUS">Brands </p>
  <p className="contactUS">About </p>

 </div>
 <div id="icondiv">
 <i class="fa-brands fa-github"></i>
              <i className="fa-brands fa-twitter"></i>
                 <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-instagram"></i>
                    </div>
    <div className="city">
  <ul >
    <li className="c1">mumbai</li>
    <li className="c1">pune</li>
    <li className="c1">hyderabad</li>
    <li className="c1">goa</li>
    <li className="c1">panvel</li>
    <li className="c1">tolichowki</li>
    <li className="c1">secnderabad</li>
    <li className="c1">naampally</li>
    <li className="c1">aurangabad</li>
    <li className="c1">ghatcoper</li>
    <li className="c1">delhi</li>
    <li className="c1">rajesthan</li>
    <li className="c1">bihar</li>
   </ul>
   <div className="city1">
  <ul >
    <li className="c2">Titan</li>
    <li className="c2">Puma</li>
    <li className="c2">Casio</li>
    <li className="c2">Sonex</li>
    <li className="c2">Fsatrack</li>
    <li className="c2">G-shock</li>
    <li className="c2">Rolex</li>
    <li className="c2">Rado</li>
    <li className="c2">Citizen</li>
    <li className="c2">Apple</li>
    <li className="c2">Paido</li>
    <li className="c2">sony</li>
    <li className="c2">redme</li>
   </ul>
  </div>   
  <div className="city2">
  <ul >
    <li className="c1">irfan@112.gamil.com</li>
    <li className="c1">diamond@22.gmail.com</li>
    <li className="c1">fast@333.gmail.com</li>
    <li className="c1">next@111.gmail.com</li>
    <li className="c1">second@555.gmail.com</li>
    <li className="c1">-----------------</li>
    <li className="c1">-----------------</li>
    <li className="c1">-----------------</li>
    <li className="c1">-----------------</li>
    <li className="c1">-------------------</li>
    <li className="c1">-------------------</li>
    <li className="c1">-------------------</li>
    <li className="c1">-------------------</li>
   </ul>
  </div>   
  </div>   


 </div>
 

     </>
  );
}

export default Slider;
