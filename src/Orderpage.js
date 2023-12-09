import React from 'react';
import './orderpage.css';

function Orderpage({ cartItems, add1, removeFromCart }) {
  return (
    <div className='ordercom'>
      <div id="cartitem">
        <div id='boreder'>
          <h1 className='bookd'>Your total quantity: [{add1}]</h1>
          <h1 className='bookd'>Your Total Amount: [{cartItems.reduce((total, item) => total + item.price, 0)}]</h1>
          <hr />

          {cartItems.length > 0 && (
            <div >
              <p className='yourcarditem'>Your Cart Items:</p>
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index} style={{ margin: "2%" }}>
                    <img src={item.src} alt="" style={{ width: "150px", height: "100px", marginTop: "1%" }} />
                    <p>Watch Name: {item.name}</p>
                    <p>Watch Price: {item.price}</p>
                    <button className='removebutton' onClick={() => removeFromCart(index)}>Remove Order</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Orderpage;




// import React from 'react';
// import './orderpage.css'
// function Orderpage(props) {

//   const removeFromCart = (index) => {
//     // Call the removeFromCart function with the index to remove the item from the cart
//     props.removeFromCart(index);
//   };
  
//   return (
//     <div className='ordercom'>
//     <div id="cartitem">
//     <div >
//       <h1 className='bookd'> your total countity=:[{props.add1}]</h1>
//       <h1 className='bookd'> your Total Amount =:[{props.cartItems.reduce((total,item,index,array)=>{
//         return total+item.price
//       },0)}]</h1>
//         <hr/>
//       {/* Check if cartItems is not empty before displaying */}

//       {props.cartItems.length > 0 && (
//         <div>
//           <p className='yourcarditem'>Your Cart Items:</p>
//           <ul >
//             {props.cartItems.map((item, index) => (
//               <li key={index} style={{margin:"2%"}}>
//                 <img src={item.src} alt="" style={{ width: "150px",height:"100px",marginTop:"1%"}} />
//                 <p >Watch Name:{item.name}</p>
//                 <p>Watch Price:{item.price}</p>
               
//                 <button className='removebutton'  onClick={() => removeFromCart(index) } >remover order </button>

//               </li>
//             ))}
//           </ul>
//         </div>
         
//       )}
//     </div>

//     </div>
//     </div>
//   );
// }

// export default Orderpage;

// import React from 'react'
// function Orderpage(props) {
  
//   return (
//     <div style={{marginTop:"10%"}}>
//       <h1>{props.order}</h1>
//     </div>
//   )
// }

// export default Orderpage
