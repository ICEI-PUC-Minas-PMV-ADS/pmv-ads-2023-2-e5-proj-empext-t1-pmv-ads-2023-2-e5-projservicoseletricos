import { useFormik } from "formik";
import { Container, ContainerText, LeftLogin, RightLogin, ContainerImg, TextField, EndingText, MainText, Text, Input, Label, ContainerPassword,} from "../../components/componentsForm/stylesGlobal";
import FilledButton from "../../components/filledButton";
import MessageError from "../../components/messageError";
import useAuth from "../../context/auth";
import { Form } from "../../styleGlobal/styles";
import Background from "../../assets/images/background.png";
import ManBlue from "../../assets/images/logo.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const { login, user, token } = useAuth();
  const [typeInput, setTypeInput] = useState("password");
  const [messageError, setMessageError] = useState({
    type: "",
    message: "",
    open: false,
  });

  useEffect(() => {
    if (user || token) {
      navigate("/products");
    }
  }, [user, token]);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      senha: "",
    },

    onSubmit: (values) => {
      setLoading(true);
      login({
        email: values.email,
        senha: values.senha,
      }).then(
        () => {
          setLoading(false);
          navigate("/products");
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
          <h2>Bem vindo a Polo.</h2>
          <h4>Aqui você pode gerenciar seu estoque de produtos!</h4>
        </ContainerText>
        <ContainerImg>
          <img
            className="principal"
            src={ManBlue}
            alt="icone"
          />
        </ContainerImg>
      </LeftLogin>
      <RightLogin>
        <Form onSubmit={formik.handleSubmit}>
          <MainText>
            <Text>Login</Text>
            <h4>Faça seu login</h4>
          </MainText>
          <TextField>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="email"
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
            Entrar
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
            Ainda não possui uma conta? <a href="/register">Cadastre-se</a>
          </h4>
        </EndingText>
      </RightLogin>
    </Container>
  );
}
