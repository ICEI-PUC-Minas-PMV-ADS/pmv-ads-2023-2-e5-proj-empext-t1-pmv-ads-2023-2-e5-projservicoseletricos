import { ContainerText, Input, Label,} from "../../../components/componentsForm/stylesGlobal";
import ContainerCards from "../../../components/containerCards";
import ContainerForm from "../../../components/containerForms";
import FilledButton from "../../../components/filledButton";
import { CenterSpinner, Container, DescriptionPages, Form, InputsContent, TitlePages,} from "../../../styleGlobal/styles";
import { createProducts, getProducts } from "../../../services/api/products";
import { getSubCategorys } from "../../../services/api/subcategorys";
import Spinner from "../../../components/spinner";
import useAuth from "../../../context/auth";
import http from "../../../services/http";
import SelectPersonality from "../../../components/select";
import MessageError from "../../../components/messageError";
import { Formik } from "formik";
import Card from "../../../components/card";
import relatorio from "../../../services/relatorio";

export default function RegisterProduct() {
  const [loading, setLoading] = useState(false);
  const [categorys, setCategorys] = useState();
  const { user } = useAuth();
  const [filterId, setFilterId] = useState([]);
  const [category, setCategory] = useState();
  const [actualCategory, setActualCategory] = useState(0);
  const [messageError, setMessageError] = useState({
    type: "",
    message: "",
    open: false,
  });
  const { data } = useQuery("products", getProducts, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    http.get(`api/Categorias`).then((res) => {
      setCategorys(res.data.filter((x) => x.usuarioId === user.id));
    });
  }, [user.id]);

  useEffect(() => {
    let ids = [];
    categorys &&
      categorys.forEach((category) => {
        ids.push(category.id);
      });
    setFilterId(ids);
  }, [categorys]);

  const dataSubcategorys = useQuery("subcategorys", getSubCategorys);

  const client = useQueryClient();

  const mutation = useMutation(createProducts, {
    onSuccess: () => {
      setLoading(false);
      client.invalidateQueries("products");
      setMessageError({
        type: "success",
        message: "Produto cadastrado com sucesso",
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
        message: "Erro ao cadastrar produto",
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

  useEffect(() => {
    const subCategorias = dataSubcategorys.data
      ? dataSubcategorys.data.filter(
          (x) => filterId && filterId.includes(x.categoriaId)
        )
      : [];

    setCategory(subCategorias);
  }, [filterId, dataSubcategorys.data]);

  return (
    <Container>
      {category && category[actualCategory] ? (
        <>
          <ContainerForm>
            <Formik
              initialValues={{
                nome: "",
                quantidade: "",
                subCategoriaId: category[0] && category[0].id,
              }}
              onSubmit={(values) => {
                setLoading(true);
                mutation.mutate(values);
                relatorio
                  .post("/products", {
                    nome: values.nome,
                    quantidade: values.quantidade,
                    data_registro: new Date(),
                  })
                  
              }}
            >
              {(props) => (
                <Form onSubmit={props.handleSubmit}>
                  <TitlePages>
                    <span>Cadastrar</span> produto
                  </TitlePages>
                  <DescriptionPages>
                    Ao lado é exibido os produtos relacionados a categoria do
                    formulário. O produto será adicionado a lista de produtos da
                    categoria informada.
                  </DescriptionPages>
                  <InputsContent>
                    <ContainerText>
                      <Label>Nome</Label>
                      <Input
                        type="text"
                        name="nome"
                        onChange={props.handleChange}
                      />
                      <Label>Quantidade</Label>
                      <Input
                        type="text"
                        name="quantidade"
                        onChange={props.handleChange}
                      />
                      <Label>Subcategoria</Label>
                      <SelectPersonality
                        value={
                          category[actualCategory] &&
                          category[actualCategory].nome
                        }
                        itensList={category}
                        setActualCategory={setActualCategory}
                        onChange={(value) => {
                          props.setFieldValue("subCategoriaId", value);
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
            {category &&
              category[actualCategory] &&
              data &&
              data.map((product) => {
                return (
                  product.subCategoriaId === category[actualCategory].id && (
                    <Card key={product.id} name={product.nome} />
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
