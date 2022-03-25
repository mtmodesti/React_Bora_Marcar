import { Container, Description } from "./styles";
import FormRegister from "../../components/registerForm";
import RegisterImg from "../../assets/images/registerImg.png";
import Header from "../../components/header";
import { motion } from "framer-motion";

const Register = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Header />
      <Container>
        <section>
        <Description>Treta na hora de decidir o rolê? Deixa que a gente resolve!</Description>
        <img src={RegisterImg} alt="Brinde a criação da sua conta" />
        </section>
        <div>
          <FormRegister />
        </div>
      </Container>
    </motion.div>
  );
};

export default Register;
