import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import './Trending.css'


// import components
import TrendingCard from './TrendingCard';
import TrustPanel from './TrustPanel';



// tsx interfaces

export interface Trending {
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

function Trending() {

  const [trendingGames,setTrendingGames] = useState<Trending[] | null>(null);

  useEffect(() => {
    const getTrendingData = async function () {
      const response = await axios('https://free-to-play-games-database.p.rapidapi.com/api/games', {
        headers: {
          'X-RapidAPI-Key': '4668ad8fc4msh66b3ce7201b892ap14f0a2jsn69e6ef5f7105',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      })
      const data = response.data;
      setTrendingGames(data);
    }
    getTrendingData();
  },[])


  const sliceGameData = trendingGames?.slice(0,9);

  return (
    <section className='trending-section'>
        <div className='trending-container'>

            <div className='container'>

                <div className='trending-content'>

                  <div className='trending-header'>
                      <h2 className='trending-header-title'>Trending</h2>
                      <Link to='/games'>
                        <button className='view-all-btn'>View all</button>
                      </Link>
                  </div>
                  
        
                  <div className='trending-card-wrapper'>

                    {sliceGameData?.map((game) => {
                      return (
                        <TrendingCard key={game.id} game={game}/>
                      )
                    })}
                  </div>

                </div>

            </div>
            
        </div>
        
        <TrustPanel/>

    </section>
  )
}

export default Trending