import Button from "../button/index";
import Input from "../input";
import { Container } from "../formAddItem/styles";
import { buttonThemes } from "../../styles/themes";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "../../provider/User";

const FormEditItem = ({ handleClose }) => {
  const { handleEditProfile } = useUser();

  const Schema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email("E-mail inválido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });

  const onSubmitFunction = (data) => {
    const treatedData = Object.entries(data)
      .filter((item) => item[1] !== "")
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});
    handleEditProfile(treatedData);
    handleClose();
  };

  return (
    <Container onSubmit={handleSubmit(onSubmitFunction)}>
      <h2>Editar Perfil</h2>
      <Input
        label="Novo nome"
        register={register}
        name="name"
        error={!!errors.name?.message}
        helperText={errors.name?.message}
      />
      <Input
        label="Novo e-mail"
        register={register}
        name="email"
        type="text"
        error={!!errors.email?.message}
        helperText={errors.email?.message}
      />

      <Button theme={buttonThemes.add} children="Editar" type="submit" />
    </Container>
  );
};

export default FormEditItem;
