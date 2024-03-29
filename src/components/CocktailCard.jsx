import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CocktailCard';

const CocktailCard = ({ image, name, id, info, glass }) => {
  return (
    <Wrapper>
      <Link to={`/cocktail/${id}`} className='card'>
        <div className="img-container">
          <img src={image} alt={name} className="img" />
        </div>
        <div className="info">
          <h4>{name}</h4>
          <h5>{glass}</h5>
          <p>{info}</p>
        </div>
      </Link>
    </Wrapper>
  );
};
export default CocktailCard;
