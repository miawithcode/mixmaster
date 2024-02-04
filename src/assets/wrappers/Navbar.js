import styled from 'styled-components';

const Wrapper = styled.nav`
  background: #fff;
  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
  }
  .logo {
    font-size: clamp(1.5rem, 3vw, 2rem);
    color: var(--primary);
    font-weight: 700;
    letter-spacing: 2px;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }
  .nav-link {
    color: var(--dark);
    transition: all 0.3s ease;
    padding: 0.25rem 0.25rem 0.25rem 0;
    letter-spacing: 2px;
  }
  .nav-link:hover {
    color: var(--primary);
  }
  .active {
    color: var(--primary);
  }
  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      flex-direction: row;
      margin-top: 0;
    }
  }
`;

export default Wrapper;
