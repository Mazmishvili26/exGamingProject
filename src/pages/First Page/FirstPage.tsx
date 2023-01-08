import React from 'react'

// import components
import Header from '../../components/Header Component/Header'
import Hero from '../../components/Hero Component/Hero'
import Trending from '../../components/Trending Component/Trending'
import Categories from '../../components/Categories Component/Categories'
import Review from '../../components/Review Component/Review'
import Footer from '../../components/Footer Component/Footer'


// typeForTS

export type FirstPageProps = {
  searchTerm : string,
  setSearchTerm: (searchTerm: string) => void;
  setOpenAuth : (openAuth: boolean) => void;
  user : any;
  logout : () => void;
  platformValue : string;
  setPlatformValue : (platformValue : string) => void;
}

function FirstPage(props : {
  categoryValue : string,
  setCategoryValue: (categoryValue: string) => void;
  searchTerm : string,
  setSearchTerm: (searchTerm: string) => void;
  setOpenAuth : (openAuth: boolean) => void;
  user : any;
  logout : () => void;
  platformValue : string;
  setPlatformValue : (platformValue : string) => void;
}) {

  const {searchTerm, setSearchTerm , categoryValue , setCategoryValue , setOpenAuth , user , logout, 
        platformValue, setPlatformValue} = props;
  
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
        <Hero/>
        <Trending/>
        <Categories categoryValue={categoryValue} setCategoryValue={setCategoryValue}/>
        <Review user={user} setOpenAuth={setOpenAuth}/>
        <Footer/>
    </>
  )
}

export default FirstPage