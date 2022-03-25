import { Container, WrongText, RightText } from "./styles";
import Button from "../../components/button";
import right from "../../assets/images/right.jpeg";
import wrong from "../../assets/images/wrong.jpeg";
import DivisionExample from "../../assets/images/modalConfirmacao.png"

const ModalInformation = ({ handleCloseInfos }) => {
  return (
    <Container>
      <Button onClick={handleCloseInfos} children="X" />
      <div>
        <h3>Seja bem-vindo ao nosso gerenciador de eventos!</h3>
        <p>Aqui vão algumas dicas de como utilizá-lo:</p>
        <p>
          Não conseguimos definir as variações de seus possíveis produtos, então
          defina bem cada item pensando no que precisa ser entregue ao evento.
          Ex:
        </p>{" "}
        <WrongText>
          <p>ERRADO</p>
          <img alt="wrong" src={wrong} />
        </WrongText>
        <RightText>
          <p>CORRETO</p>
          <img alt="right" src={right} />
        </RightText>
        <p>
          Nossa lógica de divisão visa manter os custos de maneira justa,
          primeiro dividimos os produtos aleatoriamente para cada convidado,
          depois vemos quem está pagando mais e selecionamos os que estão com
          menos gastos para ressarcir essas pessoas para que ninguém saia no
          prejuízo (sem mãos de vaca por aqui!). Ex:
        </p>
        <RightText>
          <img alt="Exemplo da lógica" src={DivisionExample} />
        </RightText>
      </div>{" "}
      <p>
        Caso a divisão não tenha te agradado é só avisar que "Deu Ruim!".
        Geraremos uma nova divisão para você!
      </p>
      <p>
        <span>Bom evento para você e obrigado por utilizar nosso app! s2 </span>
      </p>
    </Container>
  );
};

export default ModalInformation;
