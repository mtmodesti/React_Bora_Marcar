import { BsPlusSquare } from "react-icons/bs";
import { ButtonContainer } from "./styles";

const NewItemButton = ({ onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
      <BsPlusSquare />
    </ButtonContainer>
  );
};

export default NewItemButton;
