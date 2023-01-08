import React from 'react'
import { Link } from 'react-router-dom';

import { Trending } from './Trending'

function TrendingCard(props : {
    game : Trending
}) {

    const {id,thumbnail,title,genre} = props.game;

  return (
      <Link to={`/unique/:${id}`}>
        <div className='trending-card'>
          <img src={thumbnail}/>
          <div className='trending-card-desc'>
            <p className='trending-card-title'>{title}</p>
            <span className='trending-card-genre'>{genre}</span>
          </div>
        </div>
      </Link>
  )
}

export default TrendingCard