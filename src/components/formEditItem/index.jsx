import Button from "../button/index";
import Input from "../input";
import { Container } from "../formAddItem/styles";
import { buttonThemes } from "../../styles/themes";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useItemsList } from "../../provider/ItemsList";
import { ButtonsDiv } from "./styles";

const FormEditItem = ({ handleClose, itemID }) => {
  const { handleDeleteItem, handleEditItem } = useItemsList();

  const Schema = yup.object().shape({
    itemName: yup.string(),
    quantity: yup.string().matches(/^[0-9. ]*$/, "Só números"),
    price: yup.string().matches(/^[0-9. ]*$/, "Só números"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const onSubmitFunction = (data) => {
    const keys = Object.entries(data).filter((item) => item[1] !== "");
    handleEditItem(itemID, keys);
    handleClose();
  };

  return (
    <Container onSubmit={handleSubmit(onSubmitFunction)}>
      <h2>Novo Produto</h2>
      <Input
        label="Nome"
        register={register}
        name="itemName"
        error={!!errors.itemName?.message}
        helperText={errors.itemName?.message}
      />
      <div>
        <Input
          label="Quantidade"
          register={register}
          name="quantity"
          type="text"
          error={!!errors.quantity?.message}
          helperText={errors.quantity?.message}
        />
        <Input
          label="Preço"
          register={register}
          name="price"
          type="text"
          error={!!errors.price?.message}
          helperText={errors.price?.message}
        />
      </div>
      <ButtonsDiv>
        <Button
          theme={buttonThemes.delete}
          children="Excluir"
          onClick={() => {
            handleDeleteItem(itemID);
            handleClose();
          }}
        />
        <Button theme={buttonThemes.add} children="Salvar" type="submit" />
      </ButtonsDiv>
    </Container>
  );
};

export default FormEditItem;
