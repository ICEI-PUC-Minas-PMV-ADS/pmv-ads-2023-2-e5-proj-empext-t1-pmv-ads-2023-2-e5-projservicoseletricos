import { Container, ContainerText, LeftLogin, RightLogin, ContainerImg, TextField, EndingText, MainText, Text, Input, Label, ContainerPassword,} from "../../components/componentsForm/stylesGlobal";
import FilledButton from "../../components/filledButton";
import MessageError from "../../components/messageError";
import useAuth from "../../context/auth";
import { Form } from "../../styleGlobal/styles";
import Background from "../../assets/images/background.png";
import ManBlue from "../../assets/images/logo.png";
import {  useState } from "react";
import { useNavigate } from "react-router";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useFormik } from "formik";

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const [typeInput, setTypeInput] = useState("password");
  const [messageError, setMessageError] = useState({
    type: "",
    message: "",
    open: false,
  });

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      sobrenome: "",
      email: "",
      senha: "",
    },

    onSubmit: (values) => {
      setLoading(true);
      signUp({
        name: values.name,
        sobrenome: values.sobrenome,
        email: values.email,
        senha: values.senha,
      }).then(
        () => {
          setLoading(false);
          navigate("/login");
        },
        (e) => {
          setLoading(false);
          setMessageError({
            type: "error",
            message: "Email ou Senha inválidos. Por favor, tente novamente",
            open: true,
          });
          setTimeout(() => {
            setMessageError({
              type: "",
              message: "",
              open: false,
            });
          }, 3000);
        }
      );
    },
  });

  function showPassword() {
    if (typeInput === "password") {
      setTypeInput("text");
    } else {
      setTypeInput("password");
    }
  }

  return (
    <Container>
      <LeftLogin image={Background}>
        <ContainerText>
          <Text>Olá,</Text>
          <h2>Bem vindo a Polo</h2>
          <h4>Aqui você pode gerenciar seu estoque de produtos!</h4>
        </ContainerText>
        <ContainerImg>
          <img
            className="principal"
            src={ManBlue}
            alt="desenho de um homem de camisa azul e barba colocando um icone em um tablet"
          />
        </ContainerImg>
      </LeftLogin>
      <RightLogin>
        <Form onSubmit={formik.handleSubmit}>
          <MainText>
            <Text>Cadastro</Text>
          </MainText>
          <TextField>
            <Label>Primeiro Nome</Label>
            <Input
              type="text"
              name="name"
              placeholder="Ex: Luana"
              onChange={formik.handleChange}
            />
            <Label>Último Nome</Label>
            <Input
              type="text"
              name="sobrenome"
              placeholder="Ex: Silva"
              onChange={formik.handleChange}
            />
            <Label>E-mail</Label>
            <Input
              type="text"
              name="email"
              placeholder="Ex: luanasilva@email.com"
              onChange={formik.handleChange}
            />
            <Label>Senha</Label>
            <ContainerPassword>
              <Input
                type={typeInput}
                name="senha"
                placeholder="*******"
                onChange={formik.handleChange}
              />
              <span className="eye" onClick={showPassword}>
                {typeInput === "text" ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </span>
            </ContainerPassword>
          </TextField>
          <FilledButton loading={loading} type="submit">
            Cadastrar
          </FilledButton>
          {messageError && (
            <MessageError
              type={messageError.type}
              message={messageError.message}
              display={messageError.open}
            />
          )}
        </Form>
        <EndingText>
          <h4>
            Já tem cadastro? Faça o <a href="/login">Login</a>
          </h4>
        </EndingText>
      </RightLogin>
    </Container>
  );
}
