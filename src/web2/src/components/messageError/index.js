import { MessageContainer } from "./styles";

export default function MessageError(props) {
  return (
    <MessageContainer {...props} type={props.type} display={props.display}>
      <p>{props.message}</p>
    </MessageContainer>
  );
}
