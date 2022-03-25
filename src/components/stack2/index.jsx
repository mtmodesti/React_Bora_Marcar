import Container from "./styles";
import { BsListCheck } from "react-icons/bs";
import { FaRegMoneyBillAlt, FaRegGrinWink } from "react-icons/fa";
import { RiChatSmile3Line } from "react-icons/ri";
import ScrollAnimation from "react-animate-on-scroll";

const Stack2 = () => {
  return (
    <Container>
      <ScrollAnimation
        animateIn="slideInUp"
        animateOnce
        duration={1}
        style={{
          height: "20px",
        }}
      >
        <h2>Veja as vantagens do nosso aplicativo.</h2>
      </ScrollAnimation>
      <div>
        <ScrollAnimation
          animateIn="slideInLeft"
          animateOnce
          duration={1}
          style={{
            height: "20px",
            width: "45%",
            minWidth: "300px",
          }}
        >
          <span>
            <RiChatSmile3Line  /> Evite discussões e poupe tempo para as decisões
            importantes.
          </span>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="slideInRight"
          animateOnce
          duration={1}
          style={{
            height: "20px",
            width: "45%",
            minWidth: "300px",
          }}
        >
          <span>
            <BsListCheck /> Veja o que cada um irá levar através da nossa lista.
          </span>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="slideInLeft"
          animateOnce
          duration={1}
          style={{
            height: "20px",
            width: "45%",
            minWidth: "300px",
          }}
        >
          <span>
            <FaRegMoneyBillAlt /> Todos os valores são divididos e calculados de
            maneira justa.
          </span>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="slideInRight"
          animateOnce
          duration={1}
          style={{
            height: "20px",
            width: "45%",
            minWidth: "300px",
          }}
        >
          <span>
            <FaRegGrinWink /> Organize seus eventos de forma prática e
            rápida.
          </span>
        </ScrollAnimation>
      </div>
    </Container>
  );
};

export default Stack2;
