import { BurguerButton, Container } from "./styles";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../button";
import { buttonThemes } from "../../styles/themes";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";


export const MobileNav = () => {
  const location = useLocation();
  const currentLocation = location.pathname;
  const [open, setOpen] = useState(false);

  const history = useHistory();
  return (
    <Container>
      {currentLocation === "/register" && (
        <Button
          theme={buttonThemes.mobile}
          onClick={() => history.push("/login")}
        >
          Entrar
        </Button>
      )}
      {currentLocation === "/login" && (
        <Button
          theme={buttonThemes.mobile}
          onClick={() => history.push("/register")}
        >
          Cadastrar-se
        </Button>
      )}
      {currentLocation === "/" && (
        <>
          <BurguerButton open={open} onClick={() => setOpen(!open)}>
            {open ? <AiOutlineClose /> : <FiMenu />}
          </BurguerButton>
          {open && (
            <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20
             }}>
            <ul>
              <li>
                <Button
                  theme={buttonThemes.header}
                  onClick={() => {
                    history.push("/login");
                    setOpen(!open);
                  }}
                >
                  Entrar
                </Button>
              </li>
              <li>
                <Button
                  theme={buttonThemes.header}
                  onClick={() => {
                    history.push("/register");
                    setOpen(!open);
                  }}
                >
                  Cadastrar-se
                </Button>
              </li>
            </ul>
            </motion.div>
          )}
        </>
      )}
    </Container>
  );
};
