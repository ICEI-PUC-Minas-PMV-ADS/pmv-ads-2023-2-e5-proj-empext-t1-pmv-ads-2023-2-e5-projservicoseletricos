import Spinner from "../spinner";
import { StyledFilledButton } from "./styles";

export default function FilledButton(props) {
  return (
    <StyledFilledButton {...props} disabled={props.loading || props.disabled}>
      {props.loading ? <Spinner size={props.size} /> : props.children}
    </StyledFilledButton>
  );
}
