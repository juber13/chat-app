import React from 'react'
import Add from '../images/97147833-icône-de-l-utilisateur-avec-le-signe-de-l-icône-de-l-utilisateur-et-de.webp'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className='container'>
        <div className="form-container">
          <span className='logo'>Lama Chat</span>
          <span className='title' style={{marginTop: "5px"}}>Register</span>
            <form autoComplete='on'>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <input type="file" id="file" style={{display:"none"}}/>
                <label htmlFor="file">
                  <img src={Add} alt="" />
                  <span>Add an Avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>You don't have account ?  <Link to="/">Login</Link></p>
        </div>
    </div>
  )
}

export default Register