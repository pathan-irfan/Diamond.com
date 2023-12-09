import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Kids from './Kids';
import Navbaar from './Navbaar';
import New from './New';
import Orderpage from './Orderpage';
import SingInpage from './SingInpage';
import Slider from './Slider';
import ScrollImagesList from './ScrollImagesList';
import Api from './Api';
import WomenWatch from './WomenWatch';
import Welcome from './Welcome';
import photo from "./images/profile.jpg"
import Black from './Black';
import BuyButton from './BuyButton';
import Longing from './Longin';
import LogInPage from './LogInPage';
const product = [
 
  { name:  "smart watch for men",  price: 1500, src: "https://m.media-amazon.com/images/I/61gscZYmaoL.jpg" },
  { name:  "smart watch for men",  price: 2000, src: "https://i.gadgets360cdn.com/large/noise_colorfit_pro_4_review_main_1659433865849.jpg" },
  { name:  "smart watch for men",  price: 3000, src: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" },
  { name:  "smart watch for men",  price: 1300, src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyuV2FeZ3Qlha9XV98Om9wzCiYbJ2xtugjaVF5b29gpft1T1qrR5wOYlmP32uFlrClHcQ&usqp=CAU" },
  { name:  "smart watch for men",  price: 1550, src: "https://media.karousell.com/media/photos/products/2022/3/25/iwo_series_7_smart_watch_1648173496_7752afd1.jpg" },
  { name:  "smart watch for men", price: 1700, src: "https://img.freepik.com/free-vector/realistic-fitness-trackers_23-2148530529.jpg" },
  { name:  "smart watch for men",  price: 1560, src: "https://m.media-amazon.com/images/I/51vbqMeknQL._AC_UF350,350_QL80_.jpg" },
  { name:  "smart watch for men",  price: 1100, src: "https://i0.wp.com/m.media-amazon.com/images/I/41-Qv-iUI6L.jpg?fit=500%2C500&ssl=1" },
  { name:  "smart watch for men",  price: 1810, src: "https://m.media-amazon.com/images/I/61JxZ-MCN1L._AC_UL420_SR420,420_.jpg" },
  { name:  "smart watch for men",  price: 1599, src: "https://i.gadgets360cdn.com/large/noise_colorfit_pro_4_review_main_1659433865849.jpg" },
 
  { name: "casio watch for men ",    price: 3000,       src: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" },
  { name: "casio watch for men ",     price: 2200,       src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFVNJQ1JrNxNmHTjCAQA4mNz5kdsrVeipzenBxEtKHVtds0SnCjOFG6J133jG7RZZMTNg&usqp=CAU" },
  { name: "casio watch for men ",    price: 3400,       src: "https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg" },
  { name: "casio watch for men ",    price: 5500,       src: "https://media.truefacet.com/guide/wp-content/uploads/2019/01/IWC-Big-Pilots-Watch-Le-Petit-Prince-ref.-IW500916-SIHH-2016-2-e1502459610353.jpg" },
  { name: "casio watch for men ",    price: 1250,       src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-PxpWlPFlKaBdCgJ1kH9of1_fysUfFUJcXx8_wLUHb2ExC6czPcvkSGT66eLocw-fBoQ&usqp=CAU" },
  { name: "casio watch for men ",     price: 1790,       src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUtjVOkV_WPDaDVqENsJk61s1IvCLP0MzEqvOMBEKGVbpastFSgZJ6mPiHl3VAr-Uu-98&usqp=CAU" },
  { name: "casio watch for men ",     price: 13990,      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3bh5KTIgOswdtkMr8VYHDNK2NybwLVxfk0tb9YvVim70ko0cGWh0qyuVI87PEiMBsENU&usqp=CAU" },
  { name: "casio watch for men ",    price: 1130,       src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfJhopbMKzDE_6EY1beXtOBTxkuV8MWo9gC9Uh5r0VTjSb57tnR4ojsD7YTu606vd5MXg&usqp=CAU" },
  { name: "casio watch for men ",    price: 1320,       src: "https://ae01.alicdn.com/kf/HTB1oewue8WD3KVjSZFsq6AqkpXay/TEVISE-Wristwatch-Mens-Big-Men-Automatic-Mechanical-Watch-Man-Week-Month-Calendar-Rubber-Male-Clock-Watch.jpg" },
 
  { name: "kids watch for kids  ", price: 300,   src: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcROBp8W3ZtuDggdNYAzUZxz52zgqunzF1xYn738DnlIK_dxSV93Yatfe0IVdmG0SqQuewewPjY4uYWkJCFLACh0V3ywXlv-ZgaFmR89cmsd4uXaUNI04td5vA" },
  { name: "kids watch for kids  ",  price: 400,   src: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRbN1tCRBIBN7NS-BldrJlBr68kwcTJR2yUiTCzU17Jb6_BUrgOiEygeDEtMhVIGQ-WnXjkx9BoHoaKxvMow2LcMuqzssmPc4DRN0pdKlfJlpeJi7Lz9sw8HA" },
  { name: "kids watch for kids  ", price: 440,   src: "https://m.media-amazon.com/images/I/71Z1z3Sgt9L._UX679_.jpg" },
  { name: "kids watch for kids  ", price: 540,   src: "https://m.media-amazon.com/images/I/611OEwh7WkL.jpg" },
  { name: "kids watch for kids  ", price: 200,   src: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT8cAhfv8f6rV6ZuK0_WKNJJg8UYABapZKKzuU7xukHSURvc16mTAoxPdSlUSWdBysoZFhXZ1FuCYFtm6PVq4Xgk6DWrnP4bpeOhbj3CKJSHgHvJXug1tq42g" },
  { name: "kids watch for kids  ",  price: 120,   src: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcScmzJ5RlNjnbWLbHG95aDtphJTwRuI2gwBt_1zApXLZ_rbpMABFewYZ_f0jo3rd-LPoYFLOdhfWIta3P78vQeUgO4z_DvrsivO36PWNLBmj2VWuTUxxYlZctA" },
  { name: "kids watch for kids  ",  price: 190,   src: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT56qaBjnfjtGdl8j0SBBuF-DhKIjUraP1VgFbP0FooXa6dKalsnsYe3mwPZ8CccIjSRnAJwB-6RjNxkUZzHy1CgaehD5uiCLNka9ID9yzj268RsGaEUbyCtg" },
  { name: "kids watch for kids  ", price: 220,   src: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSfTN78uQAqlYRF57_Fo0WfwM-d3vUGTtrv5m3eArvVhsccdhzrua8oCz2GBo4L_SdvCNZg9o2HKNPa1e71Abv_eHt8H1awmIy9jVCie4pOp_di3HTg74umjw" },
  { name: "kids watch for kids  ", price: 440,   src: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTRYDSm-sGzvo_6UzrEYHMjAFq2xlROj_skQ8uNw9MGRUV5USpj8LQaObHYd26L821dNQ2zQSyKGxtr2lHUo2VlaerkwcaPZ3PQxMpRcDvQLRea-blb9VzW" },

  { name: "women watch for ladis  ", price: 3000,   src: "https://www.swisstimehouse.com/143393-thickbox_default/fossil-es4727-i.webp" },
  { name: "women watch for ladis  ", price: 2000,   src: "https://5.imimg.com/data5/SELLER/Default/2021/12/UC/PH/CV/35897240/women-watch.jpg" },
  { name: "women watch for ladis  ", price: 4240,   src: "https://4.imimg.com/data4/FI/UQ/ANDROID-35945583/product-500x500.jpeg" },
  { name: "women watch for ladis  ", price: 5140,   src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP5SKerDyE_JWQkkwVmmpvgzjjVnXswx9lvw&usqp=CAU" },
  { name: "women watch for ladis  ", price: 2200,   src: "https://cdn4.ethoswatches.com/the-watch-guide/wp-content/uploads/2019/11/20-great-ladies-watches-buy-2019-iconic-luxury-watch-Bulgari-Serpenti-Omega-Constellation-Rolex-Datejust-top-womens-watches-prices-SP-3.jpg" },
  { name: "women watch for ladis  ", price: 1220,   src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT198edCFllfsoIDKlYjpzqpWmjsRAqPzchRA&usqp=CAU" },
  { name: "women watch for ladis  ", price: 1390,   src: "https://luxurysales.in/cdn/shop/products/17_12_800x.jpg?v=1616828420" },
  { name: "women watch for ladis  ", price: 2420,   src: "https://m.economictimes.com/thumb/msid-95531566,width-522,height-522,resizemode-4,imgsize-27814/top-green-dial-watches-for-women-at-best-prices.jpg" },
  { name: "women watch for ladis  ", price: 4440,   src: "https://luxurysales.in/cdn/shop/products/IMG_8376_grande.jpg?v=1599114881" },

  { name: "titan watch   ", price: 5000,   src: "https://staticimg.titan.co.in/Titan/Catalog/90148KD03_1.jpg" },
  { name: "titan watch   ", price: 3000,   src: "https://5.imimg.com/data5/AS/JR/MY-4390697/91jajtmb61l-_ul1500_.jpg" },
  { name: "titan watch   ", price: 4240,   src: "https://m.media-amazon.com/images/I/71gtqJUjZAL._AC_UF350,350_QL80_.jpg" },
  { name: "titan watch   ", price: 5140,   src: "https://www.gifts-to-india.com/images/WACSPAR165_big.webp" },
  { name: "titan watch   ", price: 3200,   src: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/t/i/tr:w-270,/titan-8905151351983_2.jpg?rnd=20200526195200" },
  { name: "titan watch   ", price: 3220,   src: "https://porrandsons.com/cdn/shop/products/890.jpg?v=1641806878" },
  { name: "titan watch   ", price: 1490,   src: "https://rukminim1.flixcart.com/image/850/1000/watch/t/4/n/n617ym23-titan-original-imadqrkybrmcw5xs.jpeg?q=90" },
  { name: "titan watch   ", price: 2520,   src: "https://5.imimg.com/data5/BE/JL/MY-13794462/titan-mens-wrist-watch-500x500.jpg" },
  { name: "titan watch   ", price: 2440,   src: "https://www.jiomart.com/images/product/original/rvl4uzcvxm/titan-white-dial-gold-strap-analog-watch-for-men-9151ym01-product-images-rvl4uzcvxm-0-202209230332.jpg?im=Resize=(500,630)" },

  { name: "fastrac  watch   ", price: 4000,   src: "https://m.media-amazon.com/images/I/71sXdXRCCTL._AC_UY1000_.jpg" },
  { name: "fastrac  watch   ", price: 3600,   src: "https://img.tatacliq.com/images/i8/437Wx649H/MP000000015409335_437Wx649H_202211230237481.jpeg" },
  { name: "fastrac  watch   ", price: 4040,   src: "https://m.media-amazon.com/images/I/61TYaUl7kbL._AC_UY1000_.jpg" },
  { name: "fastrac  watch   ", price: 2340,   src: "https://m.media-amazon.com/images/I/71fLty4zklL._AC_UY1000_.jpg" },
  { name: "fastrac  watch   ", price: 2200,   src: "https://rukminim2.flixcart.com/image/850/1000/k7qinbk0/watch/a/h/b/3124sl02-6150sm04-fastrack-original-imafpwwkpewf287h.jpeg?q=90" },
  { name: "fastrac  watch   ", price: 3220,   src: "https://5.imimg.com/data5/SELLER/Default/2023/7/322615321/UO/UD/ZE/105812841/61o62nnjrcl-ac-uy1000-.jpg" },
  { name: "fastrac  watch   ", price: 3390,   src: "https://sslimages.shoppersstop.com/sys-master/images/hd1/h26/29974372253726/WFTNR3099SL01_NoColour.jpg_2000Wx3000H" },
  { name: "fastrac  watch   ", price: 4420,   src: "https://staticimg.titan.co.in/Fastrack/Catalog/38024PP62W_2.jpg" },
  { name: "fastrac  watch   ", price: 2240,   src: "https://apollo-singapore.akamaized.net/v1/files/nwp6b1sj3cg6-IN/image" },
];
const  name=[ 'pathan','irfan','imran'];    
function App() {

  const [addvalue1, setValue1] = useState(0);
  const [cartItems, setCartItems] = useState([]); // Add cartItems state // Add cartItems state
  const [data, setData] = useState();
  const [data1, setData1] = useState([]);
  // const [sing,setSing]=useState('sing in')

  // const [sing1,setSing1]=useState('')
  const [sing, setSing] = useState(localStorage.getItem('sing') || 'sing in');
  const [sing1, setSing1] = useState(localStorage.getItem('sing1') || '');

  const [pragraph,setPragraph]=useState('')
  
  const [output,setOutput]=useState(name)
////////////////////////////////////////////////////////////////////////////////////////////////
   

 const serchvalue=(e)=>{
       
  const text=e.target.value;
  const result=name.filter((item)=>{
    return item.startsWith(text);
  });
  setOutput(result);
  // console.log(result)


 }

const pragrph =()=>{

    // setPragraph(
    
    // <div id="pragraph" >
    //   {
    //     output.map((index)=>(
           
    //       <p style={{color:"black"}}>{index}</p>
    //     ))
    //   }
    // </div>
      
    // )
   }
   

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


   
   const deleteser=()=>{
    setPragraph("")
   }
    const handleValue = (e) => {
    const servalue = e.target.value;
    setData(servalue);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const resute = product.filter((item) => {
        return item.name.toLowerCase().includes(data.toLowerCase());
      });
      setData1(resute);
    }
  };


  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    const savedAddValue1 = localStorage.getItem('addvalue1');
    
   
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
     

    }
    if (savedAddValue1) {
      setValue1(parseInt(savedAddValue1));

    }
   
    
    
    


  }, []);
  useEffect(() => {
    localStorage.setItem('sing',sing); // Save 'sing' state
    localStorage.setItem('sing1',sing1 ,JSON.stringify(sing1)); 
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('addvalue', addvalue1.toString());
    
  }, [cartItems,addvalue1 ,sing,sing1]);

  

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setValue1(addvalue1 + 1);
  };
  const removeFromCart = (index) => {
    const userConfirmed = window.confirm("Are you sure you want to remove this item from the cart?");

    if (userConfirmed) {
      // If the user confirms (clicks OK), remove the item from the cart
      const updatedCartItems = cartItems.filter((_, i) => i !== index);
      setCartItems(updatedCartItems);
      setValue1((prevValue) => Math.max(0, prevValue - 1)); // Decrement addvalue, but keep it >= 0
    }
  };
  
  const singbtn =()=>{
  setSing("sing out")

  // setSing1(<img src={photo} alt='' className='profile' />)
   setSing1(<div id="profilediv"><i className="fa-solid fa-camera"></i></div>)
   
   
 }

 const sing11 =()=>{
  setSing1("")

    
  setSing("sing in ")
 }
  return (
    <>
      <BrowserRouter>
        <Navbaar fu={handleKeyPress} add1={addvalue1} onCha={handleValue} si1={sing} s1={sing11} s2={sing1} p1={pragrph} p2={pragraph} vL={serchvalue}/>

        <Routes>
          <Route path="/api" element={<Api DT={data1} add={addToCart} dl={deleteser} />} />
          <Route path="/" element={<Slider/>} />
          <Route path="/scrollList" element={<ScrollImagesList addToCart={addToCart} />} />   
          <Route path="/kids" element={<Kids addToCart={addToCart} />} />
          <Route path="/new" element={<New  addToCart={addToCart}/> } />
          {/* Pass the cartItems state to the Orderpage component */}
          <Route path='/women' element={<WomenWatch addToCart={addToCart}/>}/>
          <Route path="/order" element={<Orderpage  cartItems={cartItems} add1={addvalue1} removeFromCart={removeFromCart} />} />
          <Route path="/singin" element={<SingInpage sing={singbtn} /> } />
          <Route path="/welcome" element={<Welcome/>} />
          <Route path="/black" element={<Black/>} />
          <Route path="/bybutton" element={<BuyButton/>}/>
          <Route path="/login" element={<Longing/>} />
          <Route path="/logpage" element={<LogInPage/>} />



        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

