import { Formik } from "formik";
import Card from "../../../components/card";
import { ContainerText, Input, Label,} from "../../../components/componentsForm/stylesGlobal";
import ContainerCards from "../../../components/containerCards";
import ContainerForm from "../../../components/containerForms";
import FilledButton from "../../../components/filledButton";
import MessageError from "../../../components/messageError";
import SelectPersonality from "../../../components/select";
import Spinner from "../../../components/spinner";
import { getCategorys } from "../../../services/api/categorys";
import { createSubcategory, getSubCategorys,} from "../../../services/api/subcategorys";
import { CenterSpinner, Container, DescriptionPages, Form, InputsContent, TitlePages,} from "../../../styleGlobal/styles";
import useAuth from "../../../context/auth";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

export default function RegisterSubCategorys() {
  const { user } = useAuth();
  const [actualCategory, setActualCategory] = useState(0);
  const [categorys, setCategorys] = useState();
  const [loading, setLoading] = useState(false);
  const [messageError, setMessageError] = useState({
    type: "",
    message: "",
    open: false,
  });

  const dataSubctagorys = useQuery("subcategorys", getSubCategorys);

  const dataCategorys = useQuery("categorysRegister", getCategorys, {
    onSuccess: (data) => {
      setCategorys(data.filter((x) => x.usuarioId === user.id));
    },
  });

  const client = useQueryClient();

  const mutation = useMutation(createSubcategory, {
    onSuccess: () => {
      setLoading(false);
      client.invalidateQueries("subcategorys");
      setMessageError({
        type: "success",
        message: "Subategoria cadastrada com sucesso",
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
      console.dir(e);
      setLoading(false);
      setMessageError({
        type: "error",
        message: "Erro ao cadastrar subcategoria",
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

  const initialValues = {
    nome: "",
    categoriaId: categorys && categorys[actualCategory].id,
  };

  return (
    <Container>
      {categorys &&
      categorys[actualCategory] &&
      dataSubctagorys.data &&
      dataCategorys.data ? (
        <>
          <ContainerForm>
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => {
                setLoading(true);
                mutation.mutate(values);
              }}
            >
              {(props) => (
                <Form onSubmit={props.handleSubmit}>
                  <TitlePages>
                    Cadastrar <span>Subategoria</span>
                  </TitlePages>
                  <DescriptionPages>
                    Ao lado é exibido as subcategorias relacionadas a categoria.
                    As alterações irão atualizar as informações.
                  </DescriptionPages>
                  <InputsContent>
                    <ContainerText>
                      <Label>Nome</Label>
                      <Input
                        type="text"
                        name="nome"
                        onChange={props.handleChange}
                      />
                    </ContainerText>
                    <ContainerText>
                      <Label>Categoria</Label>
                      <SelectPersonality
                        value={categorys && categorys[actualCategory].nome}
                        itensList={categorys}
                        setActualCategory={setActualCategory}
                        onChange={(value) => {
                          props.setFieldValue("categoriaId", value);
                        }}
                      />
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
                  </InputsContent>
                </Form>
              )}
            </Formik>
          </ContainerForm>
          <ContainerCards>
            {dataSubctagorys.data &&
              dataSubctagorys.data.map((subCategory, index) => {
                return (
                  subCategory.categoriaId === initialValues.categoriaId && (
                    <Card key={index} name={subCategory.nome} register />
                  )
                );
              })}
          </ContainerCards>
        </>
      ) : (
        <CenterSpinner>
          <Spinner size="30px" />
        </CenterSpinner>
      )}
    </Container>
  );
}
