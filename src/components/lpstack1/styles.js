import styled from "styled-components";
import 'animate.css';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 93.5vh;
  justify-content: space-around;
  padding: 80px;
  p {
    font-size: 21px;
    width: 250px;
    color: var(--color-linen);
    text-align: center;

    span {
      color: var(--color-stateBlue);
    }
  }
  svg {
    color: var(--color-stateBlue);
    font-size: 30px;
    cursor: pointer;
  }

  button {
    padding: 12px 38px;
  }
  @media (min-width: 425px) {
    button {
      padding: 12px 64px;
    }
  }

  @media (min-width: 768px) {
    p {
      font-size: 33px;
      width: 350px;
    }
  }

  @media (min-width: 1024px) {
    p {
      font-size: 40px;
      width: 450px;
    }
  }
`;
