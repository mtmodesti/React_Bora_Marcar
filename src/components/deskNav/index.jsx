import { useHistory } from "react-router-dom";
import { buttonThemes } from "../../styles/themes";
import Button from "../button";
import { Container } from "./styles";
import { useLocation } from "react-router-dom";

const DeskNav = () => {
  const history = useHistory();
  const location = useLocation();
  const currentLocation = location.pathname;

  return (
    <Container>
      {currentLocation === "/register" && (
        <Button
          theme={buttonThemes.header}
          onClick={() => history.push("/login")}
        >
          Entrar
        </Button>
      )}
      {currentLocation === "/login" && (
        <Button
          theme={buttonThemes.header}
          onClick={() => history.push("/register")}
        >
          Cadastrar-se
        </Button>
      )}
      {currentLocation === "/" && (
        <>
          <Button
            theme={buttonThemes.header}
            onClick={() => history.push("/login")}
          >
            Entrar
          </Button>
          <Button
            theme={buttonThemes.header}
            onClick={() => history.push("/register")}
          >
            Cadastrar-se
          </Button>
        </>
      )}
    </Container>
  );
};

export default DeskNav;
