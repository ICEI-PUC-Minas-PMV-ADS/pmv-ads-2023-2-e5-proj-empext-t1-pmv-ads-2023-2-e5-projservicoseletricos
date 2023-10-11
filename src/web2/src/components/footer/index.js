import { Content, FooterStyles, InfoPolo, Members, BaseFooter, Container,} from "./styles";
import Polo from "../../assets/images/logo.png";
import { useNavigate } from "react-router";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <FooterStyles>
      <Container>
        <Content>
          
          <Members>
            <h2>Desenvolvedores</h2>
            <Content row>
              <div>
                <ul>
                  <li>
                    <a>Bruno Gammaro</a>
                  </li>
                  <li>
                    <a>Victor Gammaro</a>
                  </li>
                  <li>
                    <a>Ciro Artiga</a>
                  </li>
                  <li>
                    <a></a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a>Leonardo Filter</a>
                  </li>
                  <li>
                    <a>Luiz Felipe</a>
                  </li>
                  <li>
                    <a>Pedro Henrique</a>
                  </li>
                </ul>
                <p className="professor">
                  Professor: 
                </p>
              </div>
            </Content>
          </Members>
        </Content>
      </Container>
      <BaseFooter>
        <p>Puc Minas</p>
        <p>Análise e Desenvolvimento de Sistemas - 2° semestre de 2023</p>
        <img onClick={() => navigate("/products")} src={Polo} alt="logo" />
      </BaseFooter>
    </FooterStyles>
  );
}
