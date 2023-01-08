import React , {useState , useEffect} from 'react'
import axios from 'axios';
import './SearchFilter.css'

// import icons
import {BiSearch} from 'react-icons/bi'


// importTypeforTS
import { FirstPageProps } from '../../pages/First Page/FirstPage';
import SearchCard from './SearchCard';


// import components
import Loading from '../Loading Component/Loading';
import DataFilter from './DataFilter';

// GamesData Interface

export interface GamesData {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;
}


function SearchFilter(props : {
    categoryValue : string,
    setCategoryValue: (categoryValue: string) => void;
    searchTerm : string,
    setSearchTerm: (searchTerm: string) => void;
    platformValue : string;
    setPlatformValue : (platformValue : string) => void;
}) {

    const {searchTerm, setSearchTerm , categoryValue, setCategoryValue , platformValue , setPlatformValue} = props;



    const [games,setGames] = useState<GamesData[] | null >(null);
    const [loading,setLoading] = useState(true);
    const [checkLength,setCheckLength] = useState<number | undefined >(undefined);

    const [sortValue,setSortValue] = useState('');

    useEffect(() => {
        const getGamesData = async function () {
            try {
                let params = {};
                if (platformValue) {
                    params = {
                        ...params,
                        platform: platformValue,
                    }
                }
                if (categoryValue) {
                    params = {
                        ...params,
                        category: categoryValue,
                    }
                }
                if (sortValue) {
                    params = {
                        ...params,
                        'sort-by': sortValue
                    }
                }
                console.log(params);
                const response = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games', {
                    params,
                    headers: {
                        'X-RapidAPI-Key': '4668ad8fc4msh66b3ce7201b892ap14f0a2jsn69e6ef5f7105',
                        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                    }
                });
                const data = response.data;
                setLoading(false);
                setGames(data);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        getGamesData();
    },[platformValue, sortValue , categoryValue])



    // filterGamesDataLength

    const filterLength = games?.filter((game) => {
        return game.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
    });

    // filterGamesDataLength

    
    if(loading){
        return <Loading/>
    }

    return (
        <>
            <DataFilter 
                platformValue={platformValue} 
                setPlatformValue={setPlatformValue} 
                sortValue={sortValue} 
                setSortValue={setSortValue}
                categoryValue={categoryValue}
                setCategoryValue={setCategoryValue}
            />

            {filterLength?.length !== 0 ? (
                <section className='search-filter-section'>
                <div className='container search-filter-container'>
                    
                    {games?.filter((value) => {
                        if(searchTerm === "") {
                            return value;
                        }
                        else if (value.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                            return value;
                        }
                        })
                        .map((game) => {
                            return (
                                <SearchCard key={game.id} game={game}/>
                            )
                        })}
                </div>
            </section>
            )
            : (
                <div className='empty-container'>
                    <BiSearch className='empty-icon'/>
                    <p className='empty-title'>No results found</p>
                    <span className='empty-helper'>Adjust your filters and try again.</span>
                </div>
            )
            }


        </>
        

        )
}

export default SearchFilter
