import { BrowserRouter, Route , Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
import { useEffect, useState } from 'react';
import { auth } from './pages/Authorization Page/FirebaseConfig';
import { createUserWithEmailAndPassword , onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";



// import pages
import FirstPage from './pages/First Page/FirstPage';
import SearchPage from './pages/Search Page/SearchPage';
import Unique from './pages/Unique Page/Unique';
import UserAuth from './components/UserAuth Component/UserAuth';


// search States

const queryClient = new QueryClient()

function App() {

  const [searchTerm,setSearchTerm] = useState('');
  const [categoryValue,setCategoryValue] = useState('');
  const [platformValue,setPlatformValue] = useState('');
  const [sortValue,setSortValue] = useState('');

  // registration states

  const [openAuth,setOpenAuth] = useState(false);

  // registration states

  const [registerEmail,setRegisterEmail] = useState('');
  const [registerPassword,setRegisterPassword] = useState(''); 
  const [user,setUser] = useState<any>({});
  const [userError,setUserError] = useState<any>('');
  const [userSuccess,setUserSuccess] = useState<any>('');
  const [loginError,setLoginError] = useState('');
  
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser : any) => {
      setUser(currentUser);
      if(currentUser.accessToken){
        setUserSuccess(currentUser.accessToken);
      }
    })
  },[user])

  const registerUser = () => {
    try {
      const user = createUserWithEmailAndPassword(auth, registerEmail, registerPassword);

      user.catch((error) => {
        setUserError(error.code);
      } )

      user.then((success) => {
        setUserError('');
      })
      
    } catch (error) {
      console.log(error);
    }
  }


   // registration states


  // userSignOut

  const logout = () => {
    signOut(auth);
    setUserSuccess('');
  }

   // userSignOut


  // userLogin

  const [loginEmail,setLoginEmail] = useState('');
  const [loginPassword,setLoginPassword] = useState('');

  const loginUser = () => {
    try {
      const user = signInWithEmailAndPassword(auth, loginEmail, loginPassword);

      user.catch((loginError) => {
        setLoginError(loginError.code);
      })

      user.then((loginSuccess) => {
        setLoginError('');
        setOpenAuth(false);
        console.log('lgSuc', loginSuccess);
      })

    } catch (error : any) {
      alert(error)
    }
  }

  

  if(openAuth){
    return <BrowserRouter>
        <UserAuth
        registerEmail={registerEmail}
        setRegisterEmail={setRegisterEmail}
        registerPassword={registerPassword}
        setRegisterPassword={setRegisterPassword}
        registerUser={registerUser}

        loginEmail={loginEmail}
        setLoginEmail={setLoginEmail}
        loginPassword={loginPassword}
        setLoginPassword={setLoginPassword}
        loginUser={loginUser}

        setOpenAuth={setOpenAuth}
        user={user}
        userError={userError}
        setUserError={setUserError}
        userSuccess={userSuccess}

        loginError={loginError}
        setLoginError={setLoginError}
      />
    </BrowserRouter>
  }
  else{
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FirstPage 
            categoryValue={categoryValue} 
            setCategoryValue={setCategoryValue} 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm}
            setOpenAuth={setOpenAuth}
            user={user}
            logout={logout}
            platformValue={platformValue}
            setPlatformValue={setPlatformValue}
          />
          }
          ></Route>

          <Route path='/games' element={<SearchPage 
            categoryValue={categoryValue} 
            setCategoryValue={setCategoryValue} 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            setOpenAuth={setOpenAuth} 
            user={user} 
            logout={logout}
            platformValue={platformValue}
            setPlatformValue={setPlatformValue}
          />
        }
          ></Route>
          <Route path='/unique/:uniqueID' element={<Unique/>}></Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )};
}

export default App;
