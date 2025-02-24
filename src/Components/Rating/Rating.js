import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as starRegular } from '@fortawesome/free-regular-svg-icons';
import { faStar as starSolid } from '@fortawesome/free-solid-svg-icons';
import './Rating.css';

const Rating = ({rating}) => {

    const initialRating = [];
    const activeRating = [];

    for(let i = 1; i <= 5; i++) {
        initialRating.push(<FontAwesomeIcon key={i} icon={starRegular} />);
        activeRating.push(<FontAwesomeIcon key={i} icon={starSolid} />);
    }

    let ratingPercent = String(rating/5*100) + '%';

    return(
        <div className="rating-holder">
            <div className="rating">
                <div className="initial">
                    {initialRating}
                </div>
                <div className="active" style={{width: ratingPercent}}>
                    {activeRating}
                </div>
            </div>
            <span>{rating}</span>
        </div>
    );
}

export default Rating;