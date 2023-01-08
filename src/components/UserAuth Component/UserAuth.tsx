import {useState} from 'react'
import './Auth.css'

// import icons
import {IoCloseOutline} from 'react-icons/io5'

// import assets
import authIMG from '../../assets/authIMG.jpg'


// import pages
import Login from '../../pages/Authorization Page/Login'
import Registration from '../../pages/Authorization Page/Registration'


// import interfaces

function UserAuth(props : {
    registerEmail : string,
    setRegisterEmail: (registerEmail: string) => void;
    registerPassword : string,
    setRegisterPassword : (registerPassword : string) => void;
    registerUser : () => void;

    loginEmail : string;
    setLoginEmail : (loginEmail : string) => void;
    loginPassword : string;
    setLoginPassword : (loginPassword : string) => void;
    loginUser : () => void;

    setOpenAuth : (openAuth : boolean) => void;
    user : any;
    userError: any;
    setUserError  : (userError : string) => void;
    userSuccess : string | null;

    loginError : string;
    setLoginError : (loginError : string) => void;
}) {
  
  const {registerEmail,registerPassword,registerUser,setRegisterEmail,setRegisterPassword, 
        loginEmail , loginPassword , loginUser , setLoginEmail ,setLoginPassword , 
        setOpenAuth , user , userError , setUserError , userSuccess , loginError , setLoginError } = props;

  const [createNEW,setCreateNEW] = useState(false);

  return (
    <section className='auth-section'>
      <div className='auth-wrapper'>
        <div className='left-auth'>
            {createNEW ? <Registration 
              setCreateNEW={setCreateNEW}
              registerEmail={registerEmail}
              setRegisterEmail={setRegisterEmail}
              registerPassword={registerPassword}
              setRegisterPassword={setRegisterPassword}
              registerUser={registerUser}
              user={user}
              userError={userError}
              setUserError={setUserError}
              userSuccess={userSuccess}
              setOpenAuth={setOpenAuth}
            /> : <Login 
              setCreateNEW={setCreateNEW}
              loginEmail={loginEmail}
              setLoginEmail={setLoginEmail}
              loginPassword={loginPassword}
              setLoginPassword={setLoginPassword}
              loginUser={loginUser}
              loginError={loginError}
              setLoginError={setLoginError}
            /> }

          <IoCloseOutline className='close-auth-icon' onClick={() => setOpenAuth(false)}/>
        </div>
        <div className='right-auth'>
            <img src={authIMG}/>
        </div>
      </div>



      


    </section>
  )
}

export default UserAuth