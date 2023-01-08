import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import icons

import {IoCloseOutline} from 'react-icons/io5'
import {SiNike} from 'react-icons/si'

function Registration(props : {
    setCreateNEW : (createNEW: boolean) => void;
    registerEmail : string,
    setRegisterEmail: (registerEmail: string) => void;
    registerPassword : string,
    setRegisterPassword : (registerPassword : string) => void;
    registerUser : () => void;
    user:any;
    userError: any;
    setUserError : (userError : string) => void;
    userSuccess : string | null;
    setOpenAuth : (openAuth : boolean) => void;
}) {

  const {setCreateNEW, registerEmail , registerPassword ,registerUser ,setRegisterEmail ,
    setRegisterPassword , user , userError , setUserError , userSuccess , setOpenAuth} = props;

  const [emailError,setEmailError] = useState<string | null>(null);
  const [passwordError,setPasswordError] = useState<string | null>(null);
  const [repeatPasswordError,setRepeatPasswordError] = useState<string | null>(null);
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errorHandler,setErrorHandler] = useState(false);


  // validateEmail
  const validateEmail = (email : string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


  const handleEmailChange = (event : any) => {
    const value = event.target.value;
    setRegisterEmail(value);
    if (!validateEmail(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError(null);
    }
  }


  // validate password

  const validatePassword = (password : string) => {
    return password.length >= 6;
  }

  const validateRepeatPassword = (password : string, repeatPassword : string) => {
    return password === repeatPassword;
  }


  const handlePasswordChange = (event : any) => {
    const value = event.target.value;
    setRegisterPassword(value);
    if (!validatePassword(value)) {
      setPasswordError('Password must be at least 6 characters long');
    } else {
      setPasswordError(null);
    }
  }


  const handleRepeatPassword = (event : any) => {
    const value = event.target.value;
    setRepeatPassword(value);
    if (!validateRepeatPassword(registerPassword, value)) {
      setRepeatPasswordError('Passwords do not match');
    } else {
      setRepeatPasswordError(null);
    }
  }

  const navigate = useNavigate();

  const handleSubmit = (e : any) => {
    e.preventDefault();

    if(!repeatPasswordError){
      registerUser();
    }    

    if(userSuccess){
      navigate('/');
    }

  }

  return (
    <section className='registration-section'>
      <form className="registration-container" onSubmit={handleSubmit}>
        <p className="login-title">Create new account.</p>
        <input 
          className="auth-input"
          placeholder='Email'
          value={registerEmail}
          onChange={handleEmailChange}
        />
        {emailError && <p className="auth-error">{emailError}</p>}
        <input 
          className="auth-input"
          placeholder='Password'
          value={registerPassword}
          onChange={handlePasswordChange}
          type="password"
        />
        {passwordError && <p className="auth-error">{passwordError}</p>}
        <input className="auth-input" placeholder='Repeat password' type="password" value={repeatPassword} onChange={handleRepeatPassword}/>
        {repeatPasswordError && <p className="auth-error">{repeatPasswordError}</p>}
        <button className="submit-btn" type="submit">Register</button>
        <p className="create-new" onClick={() => setCreateNEW(false)}>Back to login page</p>
      </form>

      {userError && 
          <div className="firebase-modal-error-bg">
            <div className="firebase-modal-error">
              <p className="firebase-error">The user could not register because <br/> <span className="firebase-alert">{userError}</span></p>
              <div className="firebase-close-box">
                <IoCloseOutline size={25} className="firebase-close-icon" onClick={() => setUserError('')}/>
              </div>
            </div>
          </div>
        }


        {userSuccess && 
          <div className="success-register-box">
            <div className="success-alert">
              <div className="success-desc">
                <SiNike className="success-icon"/>
              </div>
              <p className="success-title">Success</p>
              <p className="success-msg">You have successfully registered !</p>
              <p className="back-to-home" onClick={() => setOpenAuth(false)}>Back to home page.</p>
            </div>
          </div>
        }

    </section>
  )
}

export default Registration

