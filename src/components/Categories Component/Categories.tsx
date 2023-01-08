import React , {useState} from 'react'
import './Categories.css'

// import assets
import actionBG from '../../assets/actionbg.jpg'
import actionLogo from '../../assets/actionlogo.webp'
import adventureBG from '../../assets/adventurebg.jpg'
import adventureLogo from '../../assets/adventurelogo.webp'
import arcadeBG from '../../assets/arcadebg.jpg'
import arcadeLogo from '../../assets/arcadelogo.webp'
import fpsBG from '../../assets/fpsbg.jpg'
import fpsLogo from '../../assets/fpslogo.png'
import fightingBG from '../../assets/fightingbg.jpg'
import fightingLogo from '../../assets/fightinglogo.webp'
import rpgBG from '../../assets/rpgbg.jpg'
import rpgLogo from '../../assets/rpglogo.webp'
import sgBG from '../../assets/sgbg.jpg'
import sgLogo from '../../assets/sglogo.png'
import strategyBG from '../../assets/strategybg.jpg'
import strategyLogo from '../../assets/strategylogo.webp'
import vrBG from '../../assets/vrbg.jpg'
import vrLogo from '../../assets/vrlogo.webp'
import residentEvil from '../../assets/residentevil.jpg'

// import components

import CategoryCard from './CategoryCard'
import { Link } from 'react-router-dom'

const categoriesData = [
  {
    id:1,
    text : 'action',
    bg : actionBG,
    logo : actionLogo
  },

  {
    id:2,
    text : 'zombie',
    bg : adventureBG,
    logo : adventureLogo
  },

  {
    id:3,
    text : 'superhero',
    bg : arcadeBG,
    logo : arcadeLogo
  },

  {
    id:4,
    text : 'shooter',
    bg : fpsBG,
    logo : fpsLogo
  },

  {
    id:5,
    text : 'fighting',
    bg : fightingBG,
    logo : fightingLogo
  },

  {
    id:6,
    text : 'horror',
    bg : rpgBG,
    logo : rpgLogo
  },

  {
    id:7,
    text : 'survival',
    bg : sgBG,
    logo : sgLogo
  },

  {
    id:8,
    text : 'strategy',
    bg : strategyBG,
    logo : strategyLogo
  },

  {
    id:9,
    text : 'pvp',
    bg : vrBG,
    logo : vrLogo
  },
]

function Categories(props : {
  categoryValue : string,
  setCategoryValue: (categoryValue: string) => void;
}) {

  const {categoryValue , setCategoryValue} = props;

  const [categories,setCategories] = useState(categoriesData);

  return (
    <section className='categories-section'>
        <div className='container categories-container'>
          <div className='categories-header'>
            <h2 className='categories-title'>Categories</h2>
            <Link to={'/games'}>
              <button className='categories-btn'>View all</button>
            </Link>
          </div>
          <div className='categories-card-wrapper'>
              {categories.map((category) => {

                const {bg,id, logo ,text} = category;

                return (
                  <CategoryCard 
                    categoryValue={categoryValue} 
                    setCategoryValue={setCategoryValue} 
                    key={category.id} 
                    bg={bg}
                    id={id}
                    logo={logo}
                    text={text}
                  />
                )
              })}
  
          </div>
        </div>
        <div className='highlight-img-box'>
            <img src={residentEvil}/>
            <div className='highlight-description'>
              
              <div className='status'>
                24 march 2023
              </div>

              <div className='banner-title'>
                Resident Evil 4
              </div>

              <div className='numbers'>
                <span className='discount'>-26%</span>
                <span className='price'>50 $</span>
              </div>

            </div>
        </div>
    </section>
  )
}

export default Categories