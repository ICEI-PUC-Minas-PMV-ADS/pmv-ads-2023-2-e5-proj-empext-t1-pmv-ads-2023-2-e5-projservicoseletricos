import { useFormik } from "formik";
import Card from "../../../components/card";
import { ContainerText, Input, Label,} from "../../../components/componentsForm/stylesGlobal";
import ContainerCards from "../../../components/containerCards";
import ContainerForm from "../../../components/containerForms";
import FilledButton from "../../../components/filledButton";
import MessageError from "../../../components/messageError";
import SelectPersonality from "../../../components/select";
import { getCategorys } from "../../../services/api/categorys";
import { editSubcategory, getSubcategoryById,} from "../../../services/api/subcategorys";
import { Container, DescriptionPages, Form, InputsContent, TitlePages,} from "../../../styleGlobal/styles";
import useAuth from "../../../context/auth";

export default function EditSubcategorys() {
  const { user } = useAuth();
  const [actualCategory, setActualCategory] = useState(0);
  const [dataCategorysFilter, setDataCategorysFilter] = useState();
  const [loading, setLoading] = useState(false);
  const [messageError, setMessageError] = useState({
    type: "",
    message: "",
    open: false,
  });
  const { id } = useParams();

  const categorys = useQuery("categorysEdit", getCategorys, {
    onSuccess: (data) => {
      setDataCategorysFilter(data.filter((x) => x.usuarioId === user.id));
    },
  });
  const { data } = useQuery(["subcategorysEdit", id], getSubcategoryById, {
    onSuccess: (data) => {
      for (let key in data) {
        formik.setFieldValue(key, data[key]);
      }
    },
  });

  const client = useQueryClient();

  const mutation = useMutation(editSubcategory, {
    onSuccess: () => {
      setLoading(false);
      client.invalidateQueries("subcategorys");
      setMessageError({
        type: "success",
        message: "Subategoria editada com sucesso",
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
        message: "Erro ao editar categoria",
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
      id: "",
      nome: "",
      categoriaId: categorys,
    },

    onSubmit: (values) => {
      setLoading(true);
      mutation.mutate(values);
    },
  });

  return (
    <Container>
      {data && (
        <>
          <ContainerForm>
            <Form onSubmit={formik.handleSubmit}>
              <TitlePages>
                Editar <span>Subategoria</span>
              </TitlePages>
              <DescriptionPages>
                Ao lado é exibido as informações da subcategoria. As alterações
                irão atualizar as informações.
              </DescriptionPages>
              <InputsContent>
                <ContainerText>
                  <Label>Nome</Label>
                  <Input
                    type="text"
                    name="nome"
                    value={formik.values.nome}
                    onChange={formik.handleChange}
                  />
                </ContainerText>
                <ContainerText>
                  <Label>Categoria</Label>
                  <SelectPersonality
                    value={
                      dataCategorysFilter &&
                      dataCategorysFilter[actualCategory].nome
                    }
                    itensList={dataCategorysFilter}
                    setActualCategory={setActualCategory}
                    onChange={(value) => {
                      formik.setFieldValue("categoriaId", value);
                    }}
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
              </InputsContent>
            </Form>
          </ContainerForm>
          <ContainerCards>
            <Card
              max
              name={formik.values.nome}
              updatedAt={null}
              createdAt={null}
              type="subcategoria"
            />
          </ContainerCards>
        </>
      )}
    </Container>
  );
}
