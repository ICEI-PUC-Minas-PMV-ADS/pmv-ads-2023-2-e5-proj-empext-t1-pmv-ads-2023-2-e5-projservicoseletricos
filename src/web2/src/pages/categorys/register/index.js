import Card from "../../../components/card";
import { ContainerText, Input, Label,} from "../../../components/componentsForm/stylesGlobal";
import ContainerCards from "../../../components/containerCards";
import ContainerForm from "../../../components/containerForms";
import FilledButton from "../../../components/filledButton";
import { Container, DescriptionPages, Form, InputsContent, TitlePages,} from "../../../styleGlobal/styles";
import { useFormik } from "formik";
import { getCategorys, createCategory } from "../../../services/api/categorys";
import MessageError from "../../../components/messageError";
import Spinner from "../../../components/spinner";
import useAuth from "../../../context/auth";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

export default function RegisterCategory() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [messageError, setMessageError] = useState({
    type: "",
    message: "",
    open: false,
  });
  const { data, isLoading } = useQuery(
    "categorysRegister",
    getCategorys,
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const client = useQueryClient();

  const mutation = useMutation(createCategory, {
    onSuccess: () => {
      setLoading(false);
      client.invalidateQueries("categorysRegister");
      setMessageError({
        type: "success",
        message: "Categoria cadastrada com sucesso",
        open: true,
      });
      setTimeout(() => {
        setMessageError({
          type: "",
          message: "",
          open: false,
        });
      }, 3000);
    },
    onError: (e) => {
      setLoading(false);
      setMessageError({
        type: "error",
        message: "Erro ao cadastrar categoria",
        open: true,
      });
      setTimeout(() => {
        setMessageError({
          type: "",
          message: "",
          open: false,
        });
      }, 3000);
    },
  });

  const formik = useFormik({
    initialValues: {
      nome: "",
      usuarioId: user.id,
    },

    onSubmit: (values) => {
      setLoading(true);
      mutation.mutate(values);
    },
  });

  return (
    <Container>
      <ContainerForm>
        <TitlePages>
          <span>Cadastrar</span> categorias
        </TitlePages>
        <DescriptionPages>
          Ao lado é exibido as categorias existentes. O categoria será
          adicionado a lista de categorias existentes.
        </DescriptionPages>
        <InputsContent>
          <Form onSubmit={formik.handleSubmit}>
            <ContainerText>
              <Label>Nome</Label>
              <Input type="text" name="nome" onChange={formik.handleChange} />
            </ContainerText>
            <FilledButton type="submit" loading={loading}>
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
        </InputsContent>
      </ContainerForm>
      {isLoading ? (
        <Spinner size="30px" />
      ) : (
        <ContainerCards>
          {data &&
            data.map((item, index) => {
              return item.usuarioId === user.id && <Card m3 key={index} name={item.nome} register />;
            })}
        </ContainerCards>
      )}
    </Container>
  );
}
