import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  max-width: 420px;
  height: 540px;
  margin: auto;
  margin-top: 35px;
  border-radius: 4px;
  background-color: var(--color-middleBluePurple);
`;

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const TabButton = styled.button`
  transition: 300ms all ease-in 100ms;
  width: 50%;
  height: 43px;
  border: 2px solid var(--color-middleBluePurple);
  border-bottom: none;
  ${(props) => {
    return props.active
      ? css`
          background-color: var(--color-middleBluePurple);
          color: var(--color-darkPurple);
        `
      : css`
          background-color: var(--color-darkPurple);
          color: var(--color-middleBluePurple);
        `;
  }};

  p {
    font-family: "Nunito", sans-serif;
    font-size: 18px;
    font-weight: bold;
    line-height: 43px;
    width: 30px;
    margin: auto;
    height: 100%;
    transition: 300ms all ease-in;
    border-bottom: ${(props) =>
      props.active && "2px solid var(--color-darkPurple)"};
  }

  :hover {
    p {
      font-size: 22px;
      width: 70%;
    }
  }

  :first-of-type {
    border-radius: 4px 0 0 0;
  }

  :last-of-type {
    border-radius: 0 4px 0 0;
  }
`;

export const DivTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  p {
    border: 1px solid var(--color-darkPurple);
    padding: 0 7px;
    cursor: pointer;
    :hover {
      background-color: var(--color-darkPurple);
      color: var(--color-linen);
    }
  }
`;

export const EventTitle = styled.h2`
  height: 52px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 380px;
  padding: 0 20px 0 36px;

  div {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 35px;
    padding: 0 4px 8px;
    border-bottom: 2px solid var(--color-stateBlue);

    p,
    span {
      font-weight: bold;
      line-height: 32px;
      height: fit-content;
      width: fit-content;
    }

    span {
      margin: 0 18px 0 auto;
    }
  }

  ul {
    list-style: none;
    max-height: 310px;
    padding: 0 15px;
    margin-bottom: 15px;
    overflow: auto;

    li {
      line-height: 25px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 10px;
      height: 45px;
      border-bottom: 1px solid var(--color-darkPurple);
      border-radius: 4px 4px 0 0;

      :hover {
        background-color: rgba(255, 255, 255, 0.1);
        cursor: pointer;
      }
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 130px;
        @media screen and (min-width: 580px){
          max-width: 240px;
        }
      }
      p,
      span {
        padding: 0 4px 0;
      }
      button {
        background: transparent;
        border: none;

        svg {
          font-size: 18px;
          color: var(--color-darkPurple);
          transition: 0.3s;

          :hover {
            color: var(--color-stateBlue);
          }
        }
      }
    }
  }
`;

export const MainButton = styled.button`
  margin: 0 auto 20px;
  font-size: 18px;
  font-weight: bold;
  width: 90%;
  height: 45px;
  border-radius: 4px;
  border: none;
  background-color: var(--color-darkPurple);
  color: var(--color-middleBluePurple);
  transition: 1s all ease-in;
  :hover {
    font-size: 20px;
    background-color: var(--color-stateBlue);
    border: 1px solid var(--color-darkPurple);
    transform: scale(1.1);
  }
`;
