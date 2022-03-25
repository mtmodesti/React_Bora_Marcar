import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => props.theme.background};
  border: ${(props) => props.theme.border};
  font-size: var(--button-font-size);
  color: ${(props) => props.theme.color};
  transition: 0.3s;
  padding: ${(props) => props.theme.padding};
  min-width: ${(props) => props.theme.minWidth};
  border-radius: 4px;
  font-weight: bold;

  :hover {
    background: ${(props) => props.theme.hover.background};
    color: ${(props) => props.theme.hover.color};
    border: ${(props) => props.theme.hover.border};
  }
`;
