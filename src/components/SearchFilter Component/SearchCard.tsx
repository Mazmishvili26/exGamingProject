import { Link } from 'react-router-dom';
import { GamesData } from './SearchFilter'

function SearchCard(props : {
    game :  GamesData;
}) {

    const { id , genre,thumbnail,title} = props.game;

  return (
    <Link to={`/unique/${id}`}>
      <div className='search-card'>
          <img src={thumbnail}/>
          <div className='search-card-desc'>
              <h2 className='search-card-title'>{title}</h2>
              <p className='search-card-genre'>{genre}</p>
          </div>
      </div>
    </Link>
  )
}

export default SearchCard