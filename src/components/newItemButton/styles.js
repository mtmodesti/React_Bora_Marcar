import styled from "styled-components";

export const ButtonContainer = styled.button`
  font-size: 45px;
  width: 45px;
  height: 45px;
  border-radius: 35%;
  background-color: var(--color-darkPurple);
  color: var(--color-middleBluePurple);
  border: none;
  transition: 200ms all ease-out;
  :hover {
    background-color: var(--color-stateBlue);
  }
`;
