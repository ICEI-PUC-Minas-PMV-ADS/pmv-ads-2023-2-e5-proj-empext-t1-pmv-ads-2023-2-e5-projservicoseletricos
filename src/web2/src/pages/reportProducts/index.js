import { ContainerReport, TotalReports, ButtonPrint, ContainerProductsReport, ProductReportSingle,} from "./styles";
import relatorio from "../../services/relatorio";
import moment from "moment";
import { useEffect, useRef, useState } from "react";

export default function ReportsProducts() {
  const [products, setProducts] = useState();
  const [colorBlack, setColorBlack] = useState();
  const pdfRef = useRef();
  useEffect(() => {
    relatorio.get("/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <ContainerReport>
      <TotalReports>
        {products && <p>Total de produtos: {products.length}</p>}

        <ButtonPrint
          onClick={() => {
            setColorBlack(true);
            setTimeout(() => {
              window.print();
              setColorBlack(false);
            }, 0.2);
          }}
        >
          <p>Imprimir</p>
        </ButtonPrint>
      </TotalReports>
      <ContainerProductsReport ref={pdfRef}>
        {products &&
          products.map((product) => {
            return (
              <ProductReportSingle
                key={product.id}
                color={colorBlack}
                borderBottom={product === products[products.length - 1]}
              >
                <h2>{product.nome}</h2>
                <p>Quantidade: {product.quantidade}</p>
                <p>
                  Data de Registro:{" "}
                  {moment(product.data_registro).format("DD/MM/YYYY - h:mm:ss")}
                </p>
              </ProductReportSingle>
            );
          })}
      </ContainerProductsReport>
    </ContainerReport>
  );
}
