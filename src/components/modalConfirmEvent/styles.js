import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 420px;
  height: 460px;
  margin: auto;
  padding: 12px 24px;
  border-radius: 4px;
  background-color: var(--color-middleBluePurple);
  border: 3px solid var(--color-darkPurple);

  @media screen and (min-width: 720px) {
    height: 540px;
  }
`;

export const ContainerHeader = styled.div`
  font-weight: bold;
  width: 100%;
  padding: 12px;
  border-bottom: 2px solid var(--color-darkPurple);

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 0 4px 2px;
    border-bottom: 1px solid var(--color-linen);
    margin-bottom: 12px;
  }
`;

export const ContainerUl = styled.ul`
  width: 100%;
  margin: 15px 0;
  padding: 0 8px;
  max-height: 310px;
  list-style: none;
  overflow-y: auto;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  button {
    font-family: "Dancing Script", cursive;
    font-size: 18px;
    text-align: center;
    padding: 16px;
    width: 100%;
    color: var(--color-darkPurple);
    border-radius: 4px 0 0 4px;
  }

  button:last-of-type {
    color: var(--color-linen);
    border-radius: 0 4px 4px 0;
  }
`;

export const ListItem = styled.li`
  padding: 8px;
  color: var(--color-darkPurple);
  border: 1px solid var(--color-darkPurple);
  border-left: none;
  border-right: none;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  margin-bottom: 2px;

  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Guest = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 12px;

  p:first-of-type {
    font-weight: bold;
    text-transform: capitalize;
    text-align: start;
  }
  p{
    text-align: end;
  }
`;

export const Products = styled.div`
  padding: 4px 12px;

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2px;
    border-bottom: 1px dashed var(--color-stateBlue);
  }
`;
