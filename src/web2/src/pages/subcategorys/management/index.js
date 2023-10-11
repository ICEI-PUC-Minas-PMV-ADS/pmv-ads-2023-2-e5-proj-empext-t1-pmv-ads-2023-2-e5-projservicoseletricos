import ContainerCards from "../../../components/containerCards";
import ContainerForm from "../../../components/containerForms";
import SideManager from "../../../components/sideManager";
import { Container } from "../../../styleGlobal/styles";
import { CardsWrapper, ContentCards, ButtonBack } from "./styles";
import { TitlePages, DescriptionPages } from "../../../styleGlobal/styles";
import Selector from "../../../components/selector";
import Card from "../../../components/card";
import { getCategorys } from "../../../services/api/categorys";
import { deleteSubcategory, getSubCategorys,} from "../../../services/api/subcategorys";
import useAuth from "../../../context/auth";
import NotFound from "../../../components/notFound";
import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useQuery } from "react-query";

export default function SubcategorysManagement() {
  const [actualCategory, setActualCategory] = useState();
  const [filterAmount, setFilterAmount] = useState();
  const [showProducts, setShowProducts] = useState(false);
  const [categorysFilter, setCategorysFilter] = useState();
  const { user } = useAuth();
  const categorys = useQuery("categorys", getCategorys, {
    onSuccess: (data) => {
      setCategorysFilter(data.filter((x) => x.usuarioId === user.id));
    },
  });
  const subCategorys = useQuery("subcategorys", getSubCategorys);

  useEffect(() => {
    if (categorysFilter) {
      setActualCategory(categorysFilter[0] && categorysFilter[0].id);
    }
  }, [categorysFilter]);

  useEffect(() => {
    setFilterAmount(
      subCategorys.data &&
        subCategorys.data.filter((x) => x.categoriaId === actualCategory)
    );
  }, [subCategorys.data, actualCategory]);

  return (
    <Container>
      {actualCategory &&
      categorys.data &&
      subCategorys.data &&
      filterAmount &&
      categorysFilter &&
      categorysFilter.length > 0 ? (
        <>
          <ContainerForm>
            <TitlePages marginTop="40px">
              Gerenciar <span>Subcategorias</span>
            </TitlePages>
            <DescriptionPages>
              Escolha uma subcategoria a ser gerenciada
            </DescriptionPages>
            <ContentCards>
              {categorys.data.map((category, index) => {
                return (
                  category.usuarioId === user.id && (
                    <Selector
                      key={index}
                      category={category}
                      setShowProducts={setShowProducts}
                      setActualCategory={setActualCategory}
                      openSubcategories
                      id={category.id}
                    />
                  )
                );
              })}
            </ContentCards>
          </ContainerForm>
          <ContainerCards show={showProducts}>
            <ButtonBack onClick={() => setShowProducts(false)}>
              <BsArrowLeft className="icon" />
            </ButtonBack>
            <SideManager type="Subcategorias" amount={filterAmount.length} />
            <CardsWrapper>
              {filterAmount && filterAmount.length > 0 ? (
                subCategorys.data.map((subCategory, index) => {
                  return (
                    <>
                      {subCategory.categoriaId === actualCategory && (
                        <Card
                          key={index}
                          name={subCategory.nome}
                          id={subCategory.id}
                          api={deleteSubcategory}
                          type="subcategoria"
                          invalidateQuery={"subcategorys"}
                        />
                      )}
                    </>
                  );
                })
              ) : (
                <p>Não há subcategorias a serem gerenciadas</p>
              )}
            </CardsWrapper>
          </ContainerCards>
        </>
      ) : (
        <NotFound entity="subcategorias" />
      )}
    </Container>
  );
}
