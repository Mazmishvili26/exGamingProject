
// import components
import Header from '../Header Component/Header'
import Footer from '../Footer Component/Footer'

import { FirstPageProps } from '../../pages/First Page/FirstPage'

export type NavbarProps = FirstPageProps & {
  children: React.ReactNode;
}

function Navbar(props : NavbarProps) {

  const { searchTerm, setSearchTerm, children , setOpenAuth , user , logout , platformValue , setPlatformValue} = props;

  return (
    <>
        <Header 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          setOpenAuth={setOpenAuth} 
          user={user} 
          logout={logout}
          platformValue={platformValue}
          setPlatformValue={setPlatformValue}
        />
            {children}
        <Footer/>
    </>
  )
}

export default Navbar