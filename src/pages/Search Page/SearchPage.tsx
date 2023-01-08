// import components
import Navbar from '../../components/Navbar Component/Navbar'
import SearchFilter from '../../components/SearchFilter Component/SearchFilter'

function SearchPage(props : {
  categoryValue : string,
  setCategoryValue: (categoryValue: string) => void;
  searchTerm : string,
  setSearchTerm: (searchTerm: string) => void;
  setOpenAuth: (openAuth : boolean) => void;
  user : any;
  logout : () => void;
  platformValue : string;
  setPlatformValue : (platformValue : string) => void;
}) {

  const {searchTerm, setSearchTerm , categoryValue 
    ,setCategoryValue , setOpenAuth , user , logout, platformValue , setPlatformValue} = props;

  return (
    <Navbar 
      searchTerm={searchTerm} 
      setSearchTerm={setSearchTerm} 
      setOpenAuth={setOpenAuth} 
      user={user} 
      logout={logout}
      platformValue={platformValue}
      setPlatformValue={setPlatformValue}
    >
        <SearchFilter 
          categoryValue={categoryValue} 
          setCategoryValue={setCategoryValue} 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm}
          platformValue={platformValue}
          setPlatformValue={setPlatformValue}
        />
    </Navbar>
  )
}

export default SearchPage