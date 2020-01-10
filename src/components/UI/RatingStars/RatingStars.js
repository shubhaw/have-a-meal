import React from 'react';
import UnfilledStar from '../../../assets/svgs/UnfilledStar.svg';
import FilledStar from '../../../assets/svgs/FilledStar.svg';
const RatingStars = ({rating}) => {
    const stars = [UnfilledStar, UnfilledStar, UnfilledStar, UnfilledStar, UnfilledStar]
    for(let i=rating-1; i>-1; i--) {
        stars[i] = FilledStar;
    }
    
    return (
        <React.Fragment>
            {
                stars.map((star, i) => <img src={star} key={i} alt="rating star 1" />)
            }
        </React.Fragment>
    )
}

export default RatingStars;