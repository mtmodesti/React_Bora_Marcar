import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-darkPurple);
  color: var(--color-linen);
  width: 250px;
  height: 190px;
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 5px;
  transition: 0.5s;
  flex-direction: column;
  cursor: pointer;
  hr {
    width: 100px;
    height: 5px;
    background-color: var(--color-stateBlue);
    border: 1px solid var(--color-darkPurple);
    border-radius: 50px;
    margin: 10px;
    align-self: center;
  }
  p {
    align-self: center;
  }
  :hover {
    box-shadow: 3px 3px 3px black;
    padding-left: 5px;
    color: var(--color-middleBluePurple);
    border: 1px solid var(--color-darkPurple);
    opacity: 0.9;
    p {
      color: var(--color-linen);
      font-weight: 600;
    }
  }
`;

export const FirstContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  hr {
    border: none;
    flex: 1;
  }
  span {
    width: 20px;
    height: 20px;
    padding: 6px;
    border-bottom: none;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-stateBlue);
    font-weight: bold;
    :hover{
      color: var(--color-linen)
    }
  }
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  p {
    font-size: 1.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 240px;
    max-height: 240px;
    white-space: nowrap;
  }

  span {
    font-size: 0.8rem;
    border: none;
    margin: 5px 0 0 18px;
    align-self: flex-start;
    text-align: start;
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
