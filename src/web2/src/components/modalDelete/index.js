import { useFormik } from "formik";
import { DescriptionPages, TitlePages, InputsContent, Form,} from "../../styleGlobal/styles";
import FilledButton from "../filledButton";
import MessageError from "../messageError";
import { Overlay, CardDelete } from "./styles";

export default function ModalDelete(props) {
  const [loading, setLoading] = useState(false);
  const [messageError, setMessageError] = useState({
    type: "",
    message: "",
    open: false,
  });

  const client = useQueryClient();

  const mutation = useMutation(props.api, {
    onSuccess: () => {
      setLoading(false);
      client.invalidateQueries(props.invalidateQuery);
      props.closeModal(false);
    },
    onError: (e) => {
      setTimeout(() => {
        setMessageError({
          type: "error",
          message: "Erro ao deletar categoria",
          open: true,
        });
      }, 4000);
    },
  });

  const formik = useFormik({
    initialValues: {
      id: props.id,
    },

    onSubmit: (values) => {
      setLoading(true);
      mutation.mutate(values);
    },
  });

  return (
    <Overlay>
      <CardDelete>
        <Form onSubmit={formik.handleSubmit}>
          <TitlePages>
            Deletar <span>{props.type}</span>
          </TitlePages>
          <DescriptionPages>
            Ao clicar em deletar, o item será excluído permanentemente do banco
            de dados.
          </DescriptionPages>
          <DescriptionPages>
            Tem certeza que deseja deletar o item: {props.item}?
          </DescriptionPages>
          <InputsContent>
            <FilledButton delete type="submit" loading={loading}>
              Deletar
            </FilledButton>
            <FilledButton type="button" onClick={() => props.closeModal(false)}>
              Cancelar
            </FilledButton>
          </InputsContent>
          {messageError && (
            <MessageError
              type={messageError.type}
              message={messageError.message}
              display={messageError.open}
            />
          )}
        </Form>
      </CardDelete>
    </Overlay>
  );
}
