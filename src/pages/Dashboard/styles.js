import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  > h2 {
    color: var(--color-linen);
   
  }
  Button {
    margin: 5px;
    :hover {
      border: 1px solid var(--color-middleBluePurple);
    }
  }
 


`;

export const SubHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 300px;
  width: 85%;
  height: 50px;
  background-color: var(--color-middleBluePurple);

  span {
    cursor: pointer;
    transition: 0.5s;
    :hover {
      color: var(--color-linen);
    }
  }
`;

export const SlotCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-middleBluePurple);
  width: 85%;
  align-items: center;
  min-width: 300px;
  height: 400px;
  overflow-y: auto;
  justify-content: flex-start;
  text-align: center;

  > span {
    border-bottom: 1.5px solid var(--color-darkPurple);
    font-family: "Nunito";
    font-size: 18px;
    margin: 10px;
  }
`;

export const CardsDiv = styled.div`
  display: flex;
  justify-content: center ;
  flex-wrap: wrap;
  overflow-y: auto;
  margin-top: 20px;
  background-color: var(--color-middleBluePurple);

  span {
    border-bottom: 1.5px solid var(--color-lavenderGray);
    font-family: "Nunito";
    font-size: 18px;
    margin: 10px;
  }
  @media screen and (max-width: 580px) {
    justify-content: center;
  }
`;
