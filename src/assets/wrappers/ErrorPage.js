import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h2 {
    font-size: 3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }
  p {
    line-height: 1.5;
    margin-bottom: 1rem;
    color: var(--grey);
  }
  button {
    background: var(--secondary);
    border-color: transparent;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    cursor: pointer;
    transition: all 0.3s ease;
    :hover {
      background: var(--secondary-600);
    }
  }
  a {
    color: var(--white);
    font-size: 1rem;
  }
`;

export default Wrapper;
