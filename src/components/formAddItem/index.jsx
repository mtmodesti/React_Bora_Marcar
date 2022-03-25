import Button from "../button/index";
import Input from "../input";
import { Container } from "./styles";
import { buttonThemes } from "../../styles/themes";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useItemsList } from "../../provider/ItemsList";
import { useEvents } from "../../provider/Events";

const FormAddItem = ({ handleClose }) => {
  const { handleNewItem, itemsList } = useItemsList();
  const { activeEvent, setActiveEvent } = useEvents();

  const Schema = yup.object().shape({
    itemName: yup.string().required("Campo Obrigatório"),
    quantity: yup.string().required("Obrigatório")
    .matches(
      /^[0-9]+$/,
       "Só números"
     ),
    price: yup.string().required("Obrigatório")
     .matches(
      /^[0-9]+$/,
      "Só números"
   ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const onSubmitFunction = (data) => {
    handleNewItem(data);
    setActiveEvent({ ...activeEvent, itemsList: [...itemsList] });
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
      <Button theme={buttonThemes.add} children="Adicionar" type="submit" />
    </Container>
  );
};

export default FormAddItem;
