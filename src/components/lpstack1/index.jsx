import { useHistory } from "react-router-dom";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { buttonThemes } from "../../styles/themes";
import Button from "../button";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

const LpStack1 = () => {
  const history = useHistory();

  const scrollToStack2 = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <ScrollAnimation
        animateIn="slideInDown"
        animateOnce
        duration={1}
        style={{
          height: "20px",
        }}
      >
        <p>
          Facilite os encontros da galera, <span>Bora Marcar!</span>
        </p>
      </ScrollAnimation>
      <Button
        theme={buttonThemes.default}
        onClick={() => history.push("/dashboard")}
      >
        Criar evento
      </Button>
      <HiOutlineArrowNarrowDown onClick={() => scrollToStack2()} />
    </Container>
  );
};

export default LpStack1;
