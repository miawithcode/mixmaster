import styled from 'styled-components';

const Wrapper = styled.div`
  .form-wrapper {
    display: flex;
    margin-bottom: 4rem;
    height: 3rem;
  }
  .form-input {
    background: #fff;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    border-radius: 5px 0px 0px 5px;
    /* border-top-right-radius: 0px;
    border-bottom-right-radius: 0px; */
    font-size: 1rem;
    letter-spacing: 1px;
  }
  .form-input:focus {
    outline: none;
  }
  .btn {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    padding-right: 2rem;
    padding-left: 2rem;
  }
`;

export default Wrapper;
