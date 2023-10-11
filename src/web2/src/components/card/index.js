import { DivRow } from "../../styleGlobal/styles";
import { CardStyle } from "./styles";
import ModalDelete from "../modalDelete";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function Card(props) {
  const [modal, setModal] = useState(false);
  const [type, setType] = useState();
  const navigate = useNavigate();
  return (
    <CardStyle {...props}>
      <div>
        <h2>{props.name}</h2>
        {props.amount && <p>Quantidade: {props.amount}</p>}
      </div>

      <DivRow gap="10px">
        {!props.max && (
          <>
            <FiEdit
              style={{ fontSize: "25px", cursor: "pointer" }}
              onClick={() => {
                navigate(`edit/${props.id}`);
              }}
            />
            <RiDeleteBin6Line
              style={{
                fontSize: props.max ? "40px" : "25px",
                cursor: "pointer",
              }}
              onClick={() => {
                setModal(true);
                setType(props.type);
              }}
            />
          </>
        )}
      </DivRow>
      {modal && (
        <ModalDelete
          type={type}
          item={props.name}
          closeModal={setModal}
          id={props.id}
          api={props.api}
          invalidateQuery={props.invalidateQuery}
        />
      )}
    </CardStyle>
  );
}
