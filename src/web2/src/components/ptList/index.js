import React, { useEffect, useState } from "react";
import { Container } from "../../styleGlobal/styles";
import { CardsWrapper } from "./styles";
import { useQuery } from "react-query";
import { getProducts } from "../../services/api/products";
import Card from "../card";
import NotFound from "../notFound";

export default function ProdList() {
  const [products, setProducts] = useState([]);
  const { data } = useQuery("products", getProducts);

  useEffect(() => {
    if (data) {
      // Filtre os produtos conforme necessário
      setProducts(data);
    }
  }, [data]);

  return (
    <Container>
      {products.length > 0 ? (
        <CardsWrapper>
          {products.map((product, index) => (
            <Card
              key={index}
              name={product.nome}
              id={product.id}
              type="produto"
              // Remova a referência para a função de exclusão
            />
          ))}
        </CardsWrapper>
      ) : (
        <NotFound entity="produtos" />
      )}
    </Container>
  );
}
