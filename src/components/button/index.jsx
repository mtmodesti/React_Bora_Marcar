import { Container } from "./styles";
import { buttonThemes } from "../../styles/themes";

const Button = ({ children, theme = buttonThemes.default, ...rest }) => (
  <Container theme={theme} {...rest}>
    {children}
  </Container>
);

export default Button;
