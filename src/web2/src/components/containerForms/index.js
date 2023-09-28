import { ContainerFormStyle } from "./styles";

export default function ContainerForm(props) {
  return <ContainerFormStyle {...props}>{props.children}</ContainerFormStyle>;
}
