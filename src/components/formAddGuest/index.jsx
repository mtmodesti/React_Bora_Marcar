import Button from "../button/index";
import Input from "../input";
import { Container } from "./styles";
import { buttonThemes } from "../../styles/themes";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useGuests } from "../../provider/Guests";
import { useEvents } from "../../provider/Events";

const FormAddGuest = ({ handleCloseFormGuest }) => {
  const { setActiveEvent, activeEvent } = useEvents();
  const { handleNewGuest, guests } = useGuests();

  const Schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const onSubmitFunction = (data) => {
    handleNewGuest(data);

    setActiveEvent({ ...activeEvent, guests: [...guests] });
    handleCloseFormGuest();
  };

  return (
    <Container onSubmit={handleSubmit(onSubmitFunction)}>
      <h2>Novo Convidado</h2>
      <Input
        label="Nome"
        register={register}
        name="name"
        error={!!errors.name?.message}
        helperText={errors.name?.message}
      />
      <Button theme={buttonThemes.add} children="Adicionar" type="submit" />
    </Container>
  );
};

export default FormAddGuest;
