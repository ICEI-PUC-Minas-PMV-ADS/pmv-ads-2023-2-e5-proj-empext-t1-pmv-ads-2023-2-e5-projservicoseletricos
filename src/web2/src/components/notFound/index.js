import { Container } from "./styles";

export default function NotFound(props) {
  return (
    <Container>
      <h2>Não há {props.entity} para gerenciar.</h2>
    </Container>
  );
}
