import { useFormik } from "formik";
import Card from "../../../components/card";
import { ContainerText, Input, Label,} from "../../../components/componentsForm/stylesGlobal";
import ContainerCards from "../../../components/containerCards";
import ContainerForm from "../../../components/containerForms";
import FilledButton from "../../../components/filledButton";
import MessageError from "../../../components/messageError";
import { editCategory, getCategoryById } from "../../../services/api/categorys";
import { Container, DescriptionPages, Form, InputsContent, TitlePages,} from "../../../styleGlobal/styles";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router";

export default function EditCategorys() {
  const [loading, setLoading] = useState(false);
  const [messageError, setMessageError] = useState({
    type: "",
    message: "",
    open: false,
  });
  const { id } = useParams();
  const { isLoading } = useQuery(["categorysEdit", id], getCategoryById, {
    onSuccess: (data) => {
      for (let key in data) {
        formik.setFieldValue(key, data[key]);
      }
    },
  });

  const client = useQueryClient();

  const mutation = useMutation(editCategory, {
    onSuccess: () => {
      setLoading(false);
      client.invalidateQueries("categorysRegister");
      setMessageError({
        type: "success",
        message: "Categoria editada com sucesso",
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
      setTimeout(() => {
        setMessageError({
          type: "error",
          message: "Erro ao editar categoria",
          open: true,
        });
      }, 4000);
    },
  });

  const formik = useFormik({
    initialValues: {
      id: "",
      nome: "",
    },

    onSubmit: (values) => {
      setLoading(true);
      mutation.mutate(values);
    },
  });

  return (
    <>
      {isLoading ? null : (
        <Container>
          <ContainerForm>
            <TitlePages>
              Editar <span>Categoria</span>
            </TitlePages>
            <DescriptionPages>
              Ao lado é exibido as informações da categoria. As alterações irão
              atualizar as informações.
            </DescriptionPages>
            <InputsContent>
              <Form onSubmit={formik.handleSubmit}>
                <ContainerText>
                  <Label>Nome</Label>
                  <Input
                    type="text"
                    name="nome"
                    value={formik.values.nome}
                    onChange={formik.handleChange}
                  />
                </ContainerText>
                <FilledButton type="submit" loading={loading}>
                  Editar
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
          <ContainerCards>
            <Card
              max
              name={formik.values.nome}
              updatedAt={null}
              createdAt={null}
            />
          </ContainerCards>
        </Container>
      )}
    </>
  );
}
