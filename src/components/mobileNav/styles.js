import styled from "styled-components";

export const Container = styled.nav`
  margin: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  ul {
    width: 120px;
    position: absolute;
    right: -5px;
    background-color: var(--color-darkPurple);
    border-radius: 4px;
    border: 1px solid var(--color-stateBlue);
    li {
      width: 100%;
      border-bottom: 1px solid var(--color-stateBlue);

      button {
        width: 100%;
        background: transparent;
        border: none;
        color: var(--color-linen);
        :hover {
          background: var(--color-stateBlue);
          border-radius: 0;
          border: none;
        }
      }
    }
  }
  @media (min-width: 425px) {
    ul {
      display: none;
    }
    button {
      display: none;
    }
  }
`;

export const BurguerButton = styled.button`
  background: transparent;
  border: none;
  width: 35px;

  svg {
    font-size: 35px;
    color: var(--color-stateBlue);
  }

  @media (min-width: 425px) {
    display: none;
  }
`;
