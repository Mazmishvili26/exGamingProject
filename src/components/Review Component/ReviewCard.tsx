import React from 'react'

import { ReviewInterface } from './Review'

function ReviewCard(props : {
    review : ReviewInterface
}) {

    const {img,authorIMG,icon,msg} = props.review;

  return (
    <div className='review-card'>
        <div className='review-header'>
            <img src={img} className="review-img"/>
        </div>

        <div className='review-content'>
            <div className='review-author'>
                <img src={authorIMG} className="review-author-img"/>
                <div className='review-like'>
                    {icon}
                </div>
            </div>
            <div className='review-msg'>
                <p>{msg}</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard