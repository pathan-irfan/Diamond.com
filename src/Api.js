import React from 'react';
import './api.css';
import { Link } from 'react-router-dom';
function Api(props) {
  // Function to handle the "Add to cart" button click
  const handleAddToCart = (item) => {
    // Call the addToCart function passed from the parent component (App)
    props.add(item);
  };

  return (
    <div onClick={props.dl} style={{height:"100vh",backgroundColor:"white"}}>
    <div className="api-container" >
      {props.DT.map((usr, index) => (
        <div id="apiimageparent" key={index}>
          <img src={usr.src} alt="" className="apiimages" />
          <div>
            <h3 className="name-of-watch">{usr.name}</h3>
            <p className='price'>${usr.price}</p>
          </div>

          <div id='buy-button '>
        <Link to="/bybutton">    <button className='buy-button1'>buy now</button></Link>
            {/* Call the handleAddToCart function with the selected item (usr) when the button is clicked */}
            <button className='buy-button' onClick={() => handleAddToCart(usr)} >Add to cart</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Api;


// import React from 'react';
// import './api.css';

// function Api(props) {
//   return (
  
//     <div className="api-container">

//       {props.DT.map((usr, index) => (
//         <div id="apiimageparent" key={index}>
//           <img src={usr.src} alt="" className="apiimages" />
//           <div >
//            <h3 className="name-of-watch">{usr.name}</h3>
//            <p className='price'> {usr.price}</p>
//            </div>
          
           
//            <div id='buy-button '>
//            <button className='buy-button1'>buy now </button>
//            <button className='buy-button ' onClick={props.add }>Add to card </button>
    
//     </div>
      
//                       </div>

//       ))}
    


//     </div>
  
//   );
// }

// export default Api;
