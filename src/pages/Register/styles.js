import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90vh;
  padding: 15px;

  section {
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 500px;
    flex-wrap: wrap;
    text-align: center;
    img {
      height: 220px;
      width: 220px;
    }
  }

  @media screen and (max-width: 580px) {
    justify-content: center;
    img {
      display: none;
    }
    span {
    }
  }
`;

export const Description = styled.p`
  color: var(--color-lavenderGray);
  font-size: 40px;
  @media screen and (max-width: 580px) {
    display: none;
  }
`;
