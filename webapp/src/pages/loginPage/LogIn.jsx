import React, { useState, useContext } from 'react'
import './LogInStyles.css'
import {useNavigate} from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../database/firebase';
import { AuthContext } from './context/AuthContext';


function LogIn() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user});
        navigate("/");
        // ...
      })
      .catch((error) => {
        setError(true);
        // ..
      });
  }

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
         <input type="email" placeholder='email' onChange={e=>setEmail(e.target.value)}/>
         <input type="password" placeholder='password' onChange={e=>setPassword(e.target.value)}/>
         <button type="submit">Login</button>
         {error && <span>Wrong email or password!</span>}
      </form>
    </div>
  )
}

export default LogIn