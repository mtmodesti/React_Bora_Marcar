import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 350px;
  flex-direction: row;
  flex-wrap: wrap;
  h2 {
    width: 100%;
    text-align: center;
    margin: 20px;
    color: var(--color-lavenderGray);
  }
`;

export const MembersList = styled.ul`
  display: flex;
  max-width: 1100px;
  overflow-x: auto;
  margin: 15px;
`;
