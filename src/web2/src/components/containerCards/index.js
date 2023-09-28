import { ContainerCardStyle } from "./styles";

export default function ContainerCards(props) {
  return <ContainerCardStyle {...props}>{props.children}</ContainerCardStyle>;
}
