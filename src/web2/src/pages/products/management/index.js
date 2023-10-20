import Card from "../../../components/card";
import ContainerCards from "../../../components/containerCards";
import ContainerForm from "../../../components/containerForms";
import SideManager from "../../../components/sideManager";
import { Container } from "../../../styleGlobal/styles";
import { CardsWrapper, ContentCards, ButtonBack } from "./styles";
import { TitlePages, DescriptionPages } from "../../../styleGlobal/styles";
import Selector from "../../../components/selector";
import useAuth from "../../../context/auth";
import { getProducts } from "../../../services/api/products";
import { getCategorys } from "../../../services/api/categorys";
import { getSubCategorys } from "../../../services/api/subcategorys";
import { deleteProduct } from "../../../services/api/products";
import NotFound from "../../../components/notFound";
import { Fragment, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { BsArrowLeft } from "react-icons/bs";
import ProductForm from '../../../components/ProductForm';
import Modal from "react-modal";




export default function ProductManagement() {
  const [actualSubCatgory, setActualSubCategory] = useState(0);
  const [showProducts, setShowProducts] = useState(false);
  const { user } = useAuth();
  const { data } = useQuery("products", getProducts);
  const [categorysFilter, setCategorysFilter] = useState();
  const [filterId, setFilterId] = useState();
  const [subcategory, setSubcategory] = useState();
  const [filterAmount, setFilterAmount] = useState();
  const [showModal, setShowModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = () => {
    setShowModal(true);
  };
  
  const closeModal = () => {
    setShowModal(false);
  };

  const categorys = useQuery("categorysProduct", getCategorys, {
    onSuccess: (data) => {
      setCategorysFilter(data.filter((x) => x.usuarioId === user.id));
    },
  });

  const subcategorys = useQuery("subcategorysProduct", getSubCategorys);

  useEffect(() => {
    let ids = [];
    categorysFilter &&
      categorysFilter.forEach((category) => {
        ids.push(category.id);
      });
    setFilterId(ids);
  }, [categorysFilter]);

  useEffect(() => {
    const subCategorias = subcategorys.data
      ? subcategorys.data.filter(
          (x) => filterId && filterId.includes(x.categoriaId)
        )
      : [];

      setSubcategory(subCategorias);
  }, [filterId, subcategorys.data]);

  useEffect(() => {
    if (subcategory && subcategory[actualSubCatgory]) {
      setFilterAmount(
        data.filter((x) => x.subCategoriaId === subcategory[actualSubCatgory].id)
      );
    }
  }, [actualSubCatgory, subcategory, data]);

  return (
    <Container>
      {categorys && data && categorysFilter && subcategory && filterAmount ? (
        <Fragment>
          <ContainerForm>
            <TitlePages marginTop="40px">
              Gerenciar <span>Produtos</span>
            </TitlePages>
            <DescriptionPages>
              Escolha uma categoria dos produtos a serem gerenciados
            </DescriptionPages>
            <ContentCards>
              {categorysFilter &&
                categorysFilter.map((category, index) => {
                  return (
                    <Selector
                      key={index}
                      category={category}
                      setActualSubCategory={setActualSubCategory}
                      setShowProducts={setShowProducts}
                      subCategorys={subcategory}
                    />
                  );
                })}
            </ContentCards>
          </ContainerForm>
          <ContainerCards show={showProducts}>
            <ButtonBack onClick={() => setShowProducts(false)}>
              <BsArrowLeft className="icon" />
            </ButtonBack>
            <ProductForm onClick={openModal}>Cadastro de Produto</ProductForm>
            <SideManager type="produtos" amount={filterAmount.length} />
            <CardsWrapper>
              {filterAmount &&
              filterAmount.length > 0 &&
              subcategory[actualSubCatgory] ? (
                data.map((product, index) => {
                  return (
                    <>
                      {product.subCategoriaId === subcategory[actualSubCatgory].id && (
                        <Card
                          key={index}
                          name={product.nome}
                          id={product.id}
                          type="produto"
                          api={deleteProduct}
                        />
                      )}
                    </>
                  );
                })
              ) : (
                <p>Não há produtos a serem gerenciados</p>
              )}
            </CardsWrapper>
          </ContainerCards>

        </Fragment>
      ) : (
        <NotFound entity="produtos" />
      )}
    </Container>
  );
}
