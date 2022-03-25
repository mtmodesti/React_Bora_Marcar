import { Container } from "./styles";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

const TeamMember = ({ member }) => {
  return (
    <Container>
      <img src={`${member.img}`} alt="perfil"></img>
      <p>
        {member.name}
      </p>
      <p>
        {member.role}
      </p>
      <p>
        <a href={`${member.linkedin}`} target= "_blank" rel="noreferrer noopener"  >
          <BsLinkedin />
        </a>
        <a href={`${member.insta}`} target= "_blank" rel="noreferrer noopener"  >
          <AiOutlineInstagram />
        </a>
      </p>
    </Container>
  );
};

export default TeamMember;
