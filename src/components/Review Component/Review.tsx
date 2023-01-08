import {useState} from 'react'
import './Review.css'

// import components
import ReviewCard from './ReviewCard'

// import assets
import review1 from '../../assets/reivew1.jpg'
import review1Author from '../../assets/review1author.webp'
import review2 from '../../assets/review2.jpg'
import review2Author from '../../assets/review2author.webp'
import review3 from '../../assets/review3.jpg'
import review3Author from '../../assets/review3author.webp'
import review4 from '../../assets/review4.jpg'

// import icons
import {AiOutlineLike} from 'react-icons/ai'
import {TbSend} from 'react-icons/tb'


export interface ReviewInterface {
  id: number;
  img: string;
  authorIMG: string;
  icon: JSX.Element;
  msg: string;
};

const reviewData = [
  {
    id: 1,
    img: review1,
    authorIMG: review1Author,
    icon: <AiOutlineLike className='review-like-icon' size={30}/>,
    msg:
      'Za razliku od 19ice bobra igra. Očekivao sam više. Sve u svemu ok igra mogli bi da porade malo na optimizaciji u multy pleyeru ima dosta dropova česta nestabilnost ma da možda je i do mape.',
  },

  {
    id: 2,
    img: review2,
    authorIMG: review2Author,
    icon: <AiOutlineLike className='review-like-icon' size={30}/>,
    msg:
      'The game is good, Putting aside the little flashy effects, its got a unique look and feel, give it a go grab it on special and create your own opinion the game is what it is, stop judging just enjoy the game tahts why we play them :)',
  },


  {
    id: 3,
    img: review3,
    authorIMG: review3Author,
    icon: <AiOutlineLike className='review-like-icon' size={30}/>,
    msg:
      "Amazing game! Thanks IG! I can’t wait for Ragnarok to release to PC. The quality is amazing in 4K. I wish the game was co-op, the story is really good. I’m willing to buy more games from this website."
  },


  {
    id: 4,
    img: review4,
    authorIMG: review1Author,
    icon: <AiOutlineLike className='review-like-icon' size={30}/>,
    msg:
      "This is a pretty cozy and chill-out game! If you like cats, check! If you like management, check! If you like a short, but cute story, check! For me it wasn't a game that I could play for hours on end at a time."
  },

];


function Review(props : {
  user : any;
  setOpenAuth : (openAuth : boolean) => void;
}) {

  const [reviews,setReviews] = useState(reviewData);

  return (
    <section className='review-section'>
        <div className='review-container'>

          <div className='review-title'>
            <h2>Gamer reviews</h2>
          </div>

          <div className='review-container-wrapper'>

            {reviews.map((review) => {
              return <ReviewCard key={review.id} review={review}/>
            })}

          </div>

        </div>
        
        <div className='subscribe-container'>
            <TbSend size={50} color="#ff5400"/>
            <h2 className='subscribe-title'>Don't miss any offers and promotions!</h2>
            <p className='subscribe-more'>And be the first to receive our private offers, newsletters and deals of the week</p>
            {props.user ? <h1 className='welcome-title'>Welcome to our family: <span className='user-email'>{props.user.email}</span></h1> : <button className='subscribe-btn' onClick={() => props.setOpenAuth(true)}>Sign Up!</button>}
        </div>

    </section>
  )
}

export default Review