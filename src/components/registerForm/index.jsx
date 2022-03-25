import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../input";
import { Form } from "./styles";
import Button from "../button";
import { useAuth } from "../../provider/Auth";

const FormRegister = () => {
  const { handleRegister } = useAuth();

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .min(3, 'Nome mínimo com três letras')
      .max(50, 'Nome máximo com 50 letras')
      .matches("^[ a-zA-Z áãàâ]*$", "Nome apenas com letras"),

    age: yup
      .string()
      .required("Idade obrigatória")
      .matches(
        /^(?:1[8-9]|[2-9][0-9]|[1-9][0-9]{2,5}|1000000)$/gm,
        "Idade precisa ser maior que 18"
    ),
    
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    confirmarEmail: yup
      .string()
      .required("Confirmação de e-mail obrigatória")
      .oneOf([yup.ref("email")], "E-mails precisam coincidir"),
    password: yup.string().required("Senha obrigatória").min(6, "No mínimo 6 caracteres"),
    confirmPassword: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .min(6, "No mínimo 6 caracteres")
      .oneOf([yup.ref("password")], "Senhas precisam coincidir"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onHandleSubmit = (data) => {
    const newPost = {
      name: data.name,
      password: data.password,
      age: data.age,
      email: data.email,
    };

    handleRegister(newPost);
  };

  return (
    <Form onSubmit={handleSubmit(onHandleSubmit)}>
      <h2>Cadastro</h2>
      <Input
        label={"Nome"}
        error={!!errors.name?.message}
        register={register}
        helperText={errors.name?.message}
        name="name"
      />

      <Input
        label={"Idade"}
        error={!!errors.age?.message}
        register={register}
        helperText={errors.age?.message}
        name="age"
      />

      <Input
        label={"E-mail"}
        error={!!errors.email?.message}
        register={register}
        helperText={errors.email?.message}
        name="email"
      />

      <Input
        label={"Confirme seu e-mail"}
        error={!!errors.confirmarEmail?.message}
        register={register}
        helperText={errors.confirmarEmail?.message}
        name="confirmarEmail"
      />

      <Input
        label={"Senha"}
        error={!!errors.password?.message}
        register={register}
        helperText={errors.password?.message}
        name="password"
        type="password"
        id="outlined-adornment-password"
      />

      <Input
        label={"Confirme sua senha"}
        error={!!errors.confirmPassword?.message}
        register={register}
        helperText={errors.confirmPassword?.message}
        name="confirmPassword"
        type="password"
      />

      <Button type="submit" children={"Cadastrar"} />
    </Form>
  );
};

export default FormRegister;
