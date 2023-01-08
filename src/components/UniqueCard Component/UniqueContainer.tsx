import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import './UniqueCard.css';
import './UniqueContainer.css'

// import components
import UniqueCard from './UniqueCard';
import Footer from '../Footer Component/Footer';
import Loading from '../Loading Component/Loading';

// import icons
import {BiArrowBack} from 'react-icons/bi'

// import assets
import defaultIMG from '../../assets/mainIMG.jpg'


interface Requirements {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
};

export interface Screenshots {
  id: number;
  image: string;
};

export interface GamesInterface  {
  id: number;
  title: string;
  thumbnail: string;
  status: string;
  short_description: string;
  description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  minimum_system_requirements: Requirements;
  screenshots: Screenshots;
}

function UniqueContainer() {

  // show-more-state

  const [showMore,setShowMore] = useState(false);

  // show-more-state

  const [uniqueGames,setUniqueGames] = useState<GamesInterface[] | null | any>(null);
  const params = useParams();

  const fetchData = async function () {
    const response = await axios('https://free-to-play-games-database.p.rapidapi.com/api/game', {
      params: {id: `${params.uniqueID}`},
      headers: {
        'X-RapidAPI-Key': '4668ad8fc4msh66b3ce7201b892ap14f0a2jsn69e6ef5f7105',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    })
    const data = response.data;
    return data;
  }

  const {data, isLoading} = useQuery(['uniqueGame', params.uniqueID], fetchData);

  useEffect(() => {
    if(data){
      setUniqueGames({...data});
    }
  },[data]);


  const gamesArray : GamesInterface[] = [];
  if(uniqueGames){
    gamesArray.push(uniqueGames);
  }

  const [index,setIndex] = useState(0);


  useEffect(() => {
    const lastIndex = gamesArray.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, gamesArray]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);


  if(isLoading){
    return <Loading/>
  }


  return (

    <section className="unique-section">

      <div className='unique-main-section-wrapper'>

        {gamesArray.map((game) => {

          const {id,screenshots, thumbnail , description , minimum_system_requirements , 
            release_date, developer , publisher , platform, genre , game_url , title , status} = game;

          const images : any = screenshots;
          const imagesArray = [];
          if(images){
            imagesArray.push(images);
          }

          return (
            <div className='unique-main-section' key={id}>

              <Link to='/games'>
                <div className='go-back-box'>
                  <BiArrowBack size={35} color="#121212"/>
                </div>
              </Link>
              
              {imagesArray[0][0] ? <img src={imagesArray[0][0].image} className="unique-bg-image"/> : <img src={defaultIMG} className="unique-bg-image"/> }

              <div className='container game-info-wrapper'>

                <div className='game-description'>
                  {thumbnail && <img src={thumbnail && thumbnail} className="game-thumbnail"/> }
                  <p>About the game</p>
                  <span className='description-span'>{showMore ? description : description.substring(0,395) + "..."}</span>
                  <button className='show-more-btn' onClick={() => setShowMore(!showMore)}>{showMore ? 'Less more' : 'Show more'}</button>
                </div>

                <div className='game-requirements'>

                  
                  <div className='top'>
                      <p className='game-info-title'>Information about game</p>
                      <ul className='game-info-ul'>
                        <li>Title : <span>{title}</span></li>
                        <li>Release date : <span>{release_date}</span></li>
                        <li>Developer : <span>{developer}</span></li>
                        <li>Publisher : <span>{publisher}</span></li>
                        <li>Platform : <span>{platform}</span></li>
                        <li>Genre : <span>{genre}</span></li>
                        <li>Status : <span>{status}</span></li>
                      </ul>
                  </div>

                  {minimum_system_requirements && 
                    <div className='bottom'>
                      <p className='minimum-title'>minimum_system_requirements</p>
                      <ul className='requirements-ul'>
                        <li>OS : <span>{minimum_system_requirements.os || '?'}</span></li>
                        <li>Processor : <span>{minimum_system_requirements.processor || '?'}</span></li>
                        <li>Memory : <span>{minimum_system_requirements.memory || '?'}</span></li>
                        <li>Graphics : <span>{minimum_system_requirements.graphics || '?'}</span></li>
                        <li>Storage : <span>{minimum_system_requirements.storage || '?'}</span></li>
                      </ul>
                    </div>
                  }


                </div>


                <div className="container unique-container">
                  <UniqueCard key={game.id} game={game}/>
                </div>

                <div className='container download-game-container'>
                  <a href={game_url} target="_blank">
                    <button className='download-game-btn'>{minimum_system_requirements ? 'Download Game' : 'Play Game'}</button>
                  </a>
                </div>

              </div>    

              <Footer/>
            </div>
          )

        })}

      </div>


    </section>
  );
}

export default UniqueContainer;