// import React, { useState } from 'react';
// import axios from 'axios';
// // import './signin.css';

// function SignInPage() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     address: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://127.0.0.1:5000/api/save-data ', formData,{"Content-type":"application/json"})
//       .then((response) => {
//         console.log(response.data);
//         // Handle successful submission, e.g., show a success message to the user
//       })
//       .catch((error) => {
//         console.error(error);
//         // Handle error, e.g., show an error message to the user
//       });
//   };

//   return (
//     <center>
//       <div id='signin-div'>
//         <center>
//           <h1>Hello, sign in to your account</h1>
//         </center>

//         <form onSubmit={handleSubmit}>
//           <label htmlFor='firstName'>First name</label><br />
//           <input
//             type='text'
//             name='firstName'
//             className='input'
//             value={formData.firstName}
//             onChange={handleChange}
//           /><br />

//           <label htmlFor='lastName'>Last name</label><br />
//           <input
//             type='text'
//             name='lastName'
//             className='input'
//             value={formData.lastName}
//             onChange={handleChange}
//           /><br />

//           <label htmlFor='email'>Email</label><br />
//           <input
//             type='email'
//             name='email'
//             className='input'
//             value={formData.email}
//             onChange={handleChange}
//           /><br />

//           <label htmlFor='password'>Password</label><br />
//           <input
//             type='password'
//             name='password'
//             className='input'
//             value={formData.password}
//             onChange={handleChange}
//           /><br />

//           <label htmlFor='address'>Address</label><br />
//           <textarea
//             cols="22"
//             rows="5"
//             name='address'
//             className='input1'
//             value={formData.address}
//             onChange={handleChange}
//           /><br />

//           <button className='subbtn' type='submit'>Submit</button>
//         </form>

//       </div>
//     </center>
//   );
// }

// export default SignInPage;
import emailjs from "emailjs-com"
import React, { useState } from 'react';
import axios from 'axios';
import "./singin.css"
import { useNavigate } from "react-router-dom";
function SignInPage(props) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
///////////////////////////////////////////////////////////////////////
 emailjs.sendForm("service_x7knge5", "template_fglb3hq", e.target, "fpTXiXLihts4Zk-r_")
.then(function(response) {
  console.log('SUCCESS!', response.status, response.text);
})
.catch(function(error) {
  console.log('FAILED...', error);
});

////////////////////////////////////////////////////////
    axios.post('http://127.0.0.1:5000/api/save-data', formData, { headers: { 'Content-Type': 'application/json' } })
      .then((response) => {
        console.log(response.data);
        navigate('/');  
      })
     
  
      .catch((error) => {
        console.error(error);
      });
    
  };

  return (
    <div id='gradent'>
      <center>
        <div id='signin-div'>
          <center>
            <h1 style={{color:"gray"}}>Hello, sign in to your account</h1>
          </center>

          <form onSubmit={handleSubmit}>
            <label htmlFor='firstName' style={{color:"gray"}}>First name</label><br />
            <input
            placeholder="name"
              type='text'
              name='name'
              className='input'
              value={formData.name}
              onChange={handleChange}
              style={{color:""}}
            /><br />

            <label htmlFor='lastName'style={{color:"gray"}}>Last name</label><br />
            <input
            placeholder="lastname"
              type='text'
              name='lastName'
              className='input'
              value={formData.lastName}
              onChange={handleChange}
              style={{color:""}}
            /><br />

            <label htmlFor='email'style={{color:"gray"}}>Email</label><br />
            <input
              placeholder="email"

              type='email'
              name='email'
              className='input'
              value={formData.email}
              onChange={handleChange}
              style={{color:""}}
            /><br />

            <label htmlFor='password'style={{color:"gray"}}>Password</label><br />
            <input
              placeholder="password"

              type='password'
              name='password'
              className='input'
              value={formData.password}
              onChange={handleChange}
              style={{color:""}}
            /><br />

            <label htmlFor='address'style={{color:"gray"}}>Address</label><br />
            <textarea
               placeholder="address"

              cols="22"
              rows="5"
              name='message'
              className='input1'
              value={formData.message}
              onChange={handleChange}
              style={{color:""}}
            /><br />

              <button className='subbtn' type='submit' onClick={props.sing}  >Submit</button>
          </form>

        </div>
      </center>
    </div>
  );
}

export default SignInPage;
