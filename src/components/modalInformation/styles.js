import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-middleBluePurple);
  width: 305px;
  height: 465px;
  overflow: auto;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  ::-webkit-scrollbar {
    display: none;
  }
  h3{
    font-family: 'Nunito', sans-serif;
    text-align: center;
  }
  Button {
    padding: 4px 10px;
    font-size: var(--span-font-size);
    align-self: flex-end;
    :hover {
      border: 1px solid var(--color-darkPurple);
    }
  }
  p {
    text-align: start;
    margin: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const WrongText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-weight: bold;
  }
  img {
    width: 220px;
    height: 220px;
  }
`;

export const RightText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-weight: bold;
  }
  img {
    width: 220px;
    height: 220px;
  }
`;
