import styled from 'styled-components';

const Wrapper = styled.article`
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: 8px;
  .card {
    color: var(--dark);
    transition: all 0.3s ease;
  }
  .card:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .card:hover h4 {
    color: var(--primary);
  }
  img {
    height: 15rem;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
  .info {
    padding: 1.5rem;
    h4,
    h5 {
      margin-bottom: 0.5rem;
    }
    h4 {
      font-weight: 700;
      font-size: 1.25rem;
    }
    h5 {
      font-size: 1rem;
    }
    p {
      margin-bottom: 1rem;
      color: var(--grey);
      font-size: 0.825rem;
    }
  }
`;

export default Wrapper;
