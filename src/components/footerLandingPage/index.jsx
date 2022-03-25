import { Container, MembersList } from "./styles";
import TeamMember from "../teamMemberCard";
import { useState } from "react";

const Footer = () => {
  const [members] = useState([
    {
      name: "Anderson Pinto",
      role: "P.O",
      img: "https://ca.slack-edge.com/TQZR39SET-U02AX0Q714K-59c1210a07a7-512",
      insta: "https://www.instagram.com/adstp/",
      linkedin: "https://www.linkedin.com/in/andersonstpinto/",
    },
    {
      name: "Johão Vargas",
      role: "S.M",
      img: "https://ca.slack-edge.com/TQZR39SET-U02867Z0F6F-1dad781602b3-512",
      insta: "https://www.instagram.com/johaopedro/",
      linkedin: "https://www.linkedin.com/in/johão-pedro-abb655215",
    },
    {
      name: "Victor Ramon",
      role: "T.L",
      img: "https://ca.slack-edge.com/TQZR39SET-U02AY9QDUGM-6f3cdd01c277-512",
      insta: "https://www.instagram.com/vramon_gs/",
      linkedin: "https://www.linkedin.com/in/victor--ramon/",
    },
    {
      name: "Marcelo Teixeira",
      role: "Q.A",
      img: "https://ca.slack-edge.com/TQZR39SET-U02FGSVKD0R-d10ed6e4b277-512",
      insta: "https://www.instagram.com/modestimarceloteixeira/",
      linkedin: "https://www.linkedin.com/in/marcelo-teixeira-modesti-2960751b5/",
    },
    {
      name: "Yorran Rigatti",
      role: "Q.A.",
      img: "https://ca.slack-edge.com/TQZR39SET-U02FF0WK5QS-ef659f201956-512",
      insta: "",
      linkedin: "",
    },
  ]);

  return (
    <Container>
      <h2>Conheça a nossa equipe!</h2>
      <MembersList>
        {members.map((people, index) => {
          return <TeamMember key={index} member={people} />;
        })}
      </MembersList>
    </Container>
  );
};

export default Footer;
