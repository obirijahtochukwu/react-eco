import React  from 'react'
// eslint-disable-next-line
{/*import { FaEnvelope, FaFacebookSquare } from 'react-icons/fa'
import Axios from 'axios';
*/}

export default function SignIn() {
  // eslint-disable-next-line
  {/*const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailR, setEmailR] = useState('');
    const [passwordR, setPasswordR] = useState('');
    const [error, setError] = useState(false);
    const [loginStatus, setLoginStatus] = useState('');
   
    Axios.defaults.withCredentials= true;
   
    const register = () =>{
     Axios.post("http://localhost:3000/users",{
      emailR: email,
      passwordR: password
     }).then((response)=>{console.log(response)});
    };
   
    
    const checkEmail = (serverUsers,formData) =>{
     const user = serverUsers.find(user => user.email === formData.email);
     if (user) return user;
    }
    
    const login = async (formData) =>{
     const user = await Axios.get('http://localhost:3000/users').then((response) => checkEmail(response.data, formData));
     if (user) alert('mumu');
     else{
      Axios.post("http://localhost:3000/signin",{
      email: email,
      password: password
     }).then((response)=>{
      console.log(response);
     })
     }
    }; 
   
    const submit =()=>{
     if (email && password) {
      setError(false);
      return login();
     }
     else{
      setError(true);
     }
    }
  */}

 return (   
  <>
   <div className="signup container-fluid d-flex align-items-center w-100 justify-content-center">
     <div className="col-12 col-md-7 col-lg-5 mx-auto bg-white submit p-4">
      <form action="submit">
       <label htmlFor="email">email address:</label>
       <input type="text" className="w-100 mb-3 p-1"/>
       <label htmlFor="password">password:</label>
       <input type="text" className="w-100 mb-3 p-1"/>
       <button type='submit' className="w-100 mt-3 p-1">submit</button>
      </form>
     </div>
   </div>  
  </>
 )
}
