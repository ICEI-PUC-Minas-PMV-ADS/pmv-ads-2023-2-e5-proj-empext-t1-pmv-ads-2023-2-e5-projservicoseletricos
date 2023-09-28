import Card from "../../../components/card";
import SideManager from "../../../components/sideManager";
import { DescriptionPages, TitlePages } from "../../../styleGlobal/styles";
import { Container, AlignText, CardsWrapper } from "./styles";
import { deleteCategory, getCategorys } from "../../../services/api/categorys";
import useAuth from "../../../context/auth";

export default function CategoryManagement() {
  const { user } = useAuth();
  const [categorys, setCategorys] = useState();
  const { data } = useQuery("categorysManagmente", getCategorys, {
    onSuccess: (data) => {
      setCategorys(data.filter((x) => x.usuarioId === user.id));
    },
  });

  return (
    <Container>
      {data && categorys ? (
        <>
          <SideManager
            type="categorias"
            amount={categorys && categorys.length}
          />
          <AlignText>
            <TitlePages marginTop="40px">
              Gerenciar <span>Categorias</span>
            </TitlePages>
            <DescriptionPages>
              Escolha uma categoria a ser gerenciada
            </DescriptionPages>
          </AlignText>
          <CardsWrapper>
            {categorys && categorys.length > 0 ? (
              categorys.map((category, index) => {
                return (
                  <Card
                    key={index}
                    name={category.nome}
                    updatedAt={null}
                    createdAt={null}
                    id={category.id}
                    type="categoria"
                    api={deleteCategory}
                    invalidateQuery={"categorysManagmente"}
                  />
                );
              })
            ) : (
              <p>Não há categorias para serem gerenciadas</p>
            )}
          </CardsWrapper>
        </>
      ) : (
        ""
      )}
    </Container>
  );
}
