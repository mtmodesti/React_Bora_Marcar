import styled from "styled-components";

export const Container = styled.svg`
  display: none;

  @media (min-width: 425px) {
    display: block;
    position: fixed;
    top: 30px;
    left: 05px;
    width: 60px;
  }
`;
