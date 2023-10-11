import { Container } from "./styles";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router";

export default function SideManager(props) {
  const navigate = useNavigate();
  return (
    <Container>
      <p>
        Total de {props.type}: {props.amount}
      </p>
      <button onClick={() => navigate("register")}>
        <p>
          Nov{props.type === "produtos" ? "o" : "a"}{" "}
          {props.type.replaceAll("s", "")}
        </p>
        <AiOutlinePlus className="icon" />
      </button>
    </Container>
  );
}
