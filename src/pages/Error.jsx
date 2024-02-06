import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/not-found.svg';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="Not Found" />
          <h2>404</h2>
          <h3>Oops! Can't find that page</h3>
          <p>
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <button className='btn'>
            <Link to="/">Take me home</Link>
          </button>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
      </div>
    </Wrapper>
  );
};
export default Error;
