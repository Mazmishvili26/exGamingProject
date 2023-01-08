import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Header.css'

// import assets
import logo from '../../assets/logo.svg'

// import icons
import {FiUser} from 'react-icons/fi'
import {SlBasketLoaded} from 'react-icons/sl'
import {IoIosSearch} from 'react-icons/io'
import {IoIosClose} from 'react-icons/io'
import {RxHamburgerMenu} from 'react-icons/rx'
import {MdClose} from 'react-icons/md'

// typeForTS
import { FirstPageProps } from '../../pages/First Page/FirstPage'

function Header(props : FirstPageProps) {

  const [showDropdown,setShowDropdown] = useState(false);

  
  const {searchTerm, setSearchTerm , setOpenAuth} = props;
  const [openSearch,setOpenSearch] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    navigate('/games');
    window.scrollTo(0, 0);
  }

  const handlePC = () => {
    props.setPlatformValue('pc');
    navigate('/games');
    window.scrollTo(0, 0);
  }

  const handleWebBrowser = () => {
    props.setPlatformValue('browser');
    navigate('/games');
    window.scrollTo(0, 0);
  }

  return (
    <section className='header-section'>
        <header className='main-header'>

          <div className='header-left'>
            <Link to={'/'}>
              <img src={logo} className="header-logo"/>
            </Link>
          </div>

          <div className='header-center'>

            <ul className='header-ul'>
              <Link to='/'>
              <li>Home</li>
              </Link>
              <Link to='/games'>
                <li>Games</li>
              </Link>
              <li onClick={handlePC}>PC</li>
              <li onClick={handleWebBrowser}>Web Browser</li>

            </ul>

            <div className={openSearch ? 'search-input-box-open' : 'search-input-box'} onClick={() => setOpenSearch(true)}>
              {openSearch && 
                <form className='header-form' onSubmit={(e :any) => handleSubmit(e)}>
                  <input 
                    className='header-search' 
                    placeholder='Minecraft, RPG, Multiplayer...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button className='header-search-btn'>Advanced search</button>
                </form>
              }
              <IoIosSearch className='search-icon'/>
            </div>

            {openSearch && <IoIosClose className='header-close-search' onClick={() => setOpenSearch(false)}/>}

          </div>

          <div className='header-right'>

            <div className='header-right-icon-wrapper'>
              {props.user ? 
                <div className='logout-wrapper'>
                  {props.user.email}
                  <button onClick={props.logout} className="logout-btn">Logout</button>
                </div>
              : 
                <div className='signup-wrapper'>
                  <FiUser size={27} className="profile-icon" onClick={() => setOpenAuth(true)}/>
                </div>
              }
            </div>

            <div className='header-burger-box'>
              {showDropdown ? <MdClose className='header-burger-icon' onClick={() => setShowDropdown(false)}/> : <RxHamburgerMenu className='header-burger-icon' onClick={() => setShowDropdown(true)}/>  }
            </div>

              <div className={showDropdown ? 'header-dropdown show-dropdown' : 'header-dropdown'}>

                <ul className='header-dropdown-ul'>
                <Link to='/'>
                  <li>Home</li>
                </Link>

                <Link to='/games'>
                  <li>Games</li>
                </Link>

                <li onClick={handlePC}>PC</li>
                <li onClick={handleWebBrowser}>Web Browser</li>
                </ul>

                {props.user ?
                <div className='dropdown-user-wrapper'>
                  <p className='dropdown-user'>{props.user.email}</p>
                  <button className='dropdown-logout' onClick={props.logout}>Logout</button>
                </div>
              : 
              <button className='signup-btn' onClick={() => setOpenAuth(true)}>Sign Up</button>
              }

              </div>


          </div>

        </header>
    </section>
  )
}

export default Header