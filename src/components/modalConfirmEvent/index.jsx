import {
  Container,
  ContainerButtons,
  ContainerHeader,
  ContainerUl,
  ListItem,
  Guest,
  Products,
} from "./styles";
import { useEvents } from "../../provider/Events";

import Button from "../button";
import { buttonThemes } from "../../styles/themes";

const ModalConfirmEvent = ({ handleClose }) => {
  const { finalSolution, activeEvent, handleEditEvent, handleLetsMake } =
    useEvents();
  const treatNumbers = (num) =>
    Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(num);

  const createList = () => {
    const arrayLi = [];
    for (const guest in finalSolution.guests) {
      arrayLi.push(
        <ListItem key={guest}>
          <Guest>
            <p>{guest}</p>
            <p>
              {finalSolution.guests[guest].totalCost >= 0 ? (
                <span>
                  Receber: {treatNumbers(finalSolution.guests[guest].totalCost)}
                </span>
              ) : (
                <span>
                  Pagar:{" "}
                  {treatNumbers(finalSolution.guests[guest].totalCost * -1)}
                </span>
              )}
            </p>
          </Guest>
          <Products>
            {finalSolution.guests[guest].productList.map(
              ({ itemName, itemCost }) => (
                <div className="itemList">
                  <p>{itemName}</p>
                  <p> {treatNumbers(itemCost)}</p>
                </div>
              )
            )}
          </Products>
        </ListItem>
      );
    }

    return arrayLi;
  };

  return (
    <Container>
      <ContainerHeader>
        <div>
          <p>Preço total: </p>
          <span>{treatNumbers(finalSolution.totalPrice)}</span>
        </div>
        <div>
          <p>Média: </p>
          <span>{treatNumbers(finalSolution.averagePrice)}</span>
        </div>
      </ContainerHeader>
      <ContainerUl>{createList()}</ContainerUl>
      <ContainerButtons>
        <Button
          children="Deu Ruim!"
          theme={buttonThemes.decline}
          onClick={() => handleLetsMake()}
        />
        <Button
          children="Bora Marcar!"
          theme={buttonThemes.add}
          onClick={() => {
            handleEditEvent(activeEvent);
            handleClose();
          }}
        />
      </ContainerButtons>
    </Container>
  );
};

export default ModalConfirmEvent;
