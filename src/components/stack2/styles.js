import styled from "styled-components";

const Container = styled.div`
  
  height: 100vh;
  background-color: var(--color-middleBluePurple);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  h2 {
    color: var(--color-darkPurple);
    font-size: 30px;
    font-weight: 900;
    border-bottom: 1px solid var(--color-darkPurple);
    padding-bottom: 5px;
  }
  div {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    height: 300px;
    flex-wrap: wrap;
    justify-content: space-evenly;
    svg {
      color: var(--color-linen);
      font-size: 50px;
      margin: 10px;
    }
    span {
      display: flex;
      color: var(--color-darkPurple);
      margin: 5px;
      font-size: 1rem;
      width: 100%;
      text-align: start;
      align-items: center;
      font-weight: 800;
    }
  }

  @media (max-width: 425px) {
    h2 {
      text-align: center;
    }
    div {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      span {
        width: auto;
      }
    }
  }
`;

export default Container;
