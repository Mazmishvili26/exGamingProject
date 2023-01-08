
// import icons

import {IoCloseOutline} from 'react-icons/io5'

function Login(props : {
  setCreateNEW : (createNEW: boolean) => void;
    loginEmail : string;
    setLoginEmail : (loginEmail : string) => void;
    loginPassword : string;
    setLoginPassword : (loginPassword : string) => void;
    loginUser : () => void;
    loginError : string;
    setLoginError : (loginError : string) => void;
}) {

  const {setCreateNEW , loginEmail , loginPassword ,loginUser ,
    setLoginEmail ,setLoginPassword , loginError , setLoginError} = props;

  return (
    <section className='login-section'>
          <div className='login-container'>
            <div className='login-title'>
              <p className='login-title'>Login into your account.</p>
            </div>
            <div className='login-input-wrapper'>
              <input className='auth-input' placeholder='Email' type='text' value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}/>
              <input className='auth-input' placeholder='Password' type='password' value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}/>
              <button className='submit-btn' onClick={loginUser}>Login</button>
            </div>

            <p onClick={() => setCreateNEW(true)} className="create-new">No accout yet?</p>

          </div>

          {loginError && 
            <div className="firebase-modal-error-bg">
              <div className="firebase-modal-error">
                <p className="firebase-error">The user could not login because <br/> <span className="firebase-alert">{loginError}</span></p>
                <div className="firebase-close-box">
                  <IoCloseOutline size={25} className="firebase-close-icon" onClick={() => setLoginError('')}/>
                </div>
              </div>
            </div>
        }
    </section>

  )
}

export default Login