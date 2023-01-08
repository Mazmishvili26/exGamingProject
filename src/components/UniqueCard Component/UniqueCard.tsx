import { useState } from 'react';
import { GamesInterface } from './UniqueContainer'

// import icons
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {MdDoubleArrow} from 'react-icons/md'

// import assets
import defaultIMG from '../../assets/mainIMG.jpg'



function UniqueCard(props : {
    game : GamesInterface;
}) {

    const {screenshots , thumbnail} = props.game;

        const screenshota : any = screenshots;

        const [slideIndex,setSlideIndex] = useState(1);
        
        const nextSlide = () => {
            if(slideIndex !== screenshota.length){
                setSlideIndex(slideIndex + 1);
            }
            else if (slideIndex === screenshota.length){
                setSlideIndex(1);
            }
        }

        const prevSlide = () => {
            if(slideIndex !== 1){
                setSlideIndex(slideIndex - 1);
            }
            else if (slideIndex === 1) {
                setSlideIndex(screenshota.length);
            }
        }

    return (
        <>
            <article className='unique-card'>

                {screenshota.map((screenshot : any , index : any) => {
                        return (
                                <div className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'} key={screenshot.id}>
                                    <img src={screenshot.image} className="card-img"/>
                                </div>
                        )   
                })}     

                {screenshota.length === 0 && 
                    <img src={thumbnail} className="card-img"/>
                }       

                {screenshota.length !== 0 && 
                   <div className='slider-btn-wrapper'>
                         <div className='slider-btn-box' onClick={nextSlide}>
                           <MdDoubleArrow size={48} color="#ff5400" className='left-arrow'/>
                   </div>
            
                   <div className='slider-btn-box' onClick={prevSlide}>
                          <MdDoubleArrow size={48} color="#ff5400" className='right-arrow'/>
                    </div>
                  </div>
                }



            </article>
            
        </>
    )
}

export default UniqueCard   