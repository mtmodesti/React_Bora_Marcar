import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-around;
  padding: 30px;
  height: 90vh;
  img {
    width: 270px;
    height: 270px;
  }
  @media screen and (max-width: 580px) {
    flex-direction: column;
    justify-content: center;
    img {
      display: none;
    }
  }
  form {
    background: var(--color-middleBluePurple);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 280px;
    border-radius: 4px;
    padding: 20px 10px;
    gap: 10px;

    h2 {
      margin-bottom: 12px;
    }
  }
`;
