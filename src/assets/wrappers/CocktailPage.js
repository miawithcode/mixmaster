import styled from 'styled-components';

const Wrapper = styled.div`
  header {
    text-align: center;
    margin-bottom: 3rem;
  }
  header h3 {
    font-size: 2rem;
  }
  .img {
    border-radius: 8px;
  }
  .drink-info {
    padding-top: 2rem;
  }
  .drink {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }
  .drink-data {
    margin-right: 0.5rem;
    background: var(--primary);
    color: var(--white);
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    letter-spacing: 1px;
    font-size: 0.825rem;
  }
  .ing {
    display: inline-block;
    margin-right: 0.5rem;
  }
  @media (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 3rem;
      align-items: center;
    }
    .drink-info {
      padding-top: 0;
    }
  }
`;

export default Wrapper;
