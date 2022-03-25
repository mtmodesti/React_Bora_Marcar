import styled from "styled-components";

export const Container = styled.form`
  width: 300px;
  height: 296px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--color-middleBluePurple);
  border: 3px solid var(--color-darkPurple);
  border-radius: 4px 4px 0 0;
  h2 {
    font-size: 1.3rem;
    font-family: "Nunito", sans-serif;
    border-bottom: 2px solid var(--color-darkPurple);
    width: 80%;
    text-align: center;
  }
  > input {
    width: 80%;
  }
  button {
    width: 80%;
    border-radius: 4px;
    padding: 8px 0;
    color: var(--color-linen);

    :hover {
      background-color: var(--color-stateBlue);
      border-color: var(--color-stateBlue);
      border: 1px solid var(--color-darkPurple);

    }
  }
`;
