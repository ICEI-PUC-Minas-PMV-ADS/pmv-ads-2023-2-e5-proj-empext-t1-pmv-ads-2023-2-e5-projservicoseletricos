import { DivRow } from "../../styleGlobal/styles";
import { CardStyle } from "./styles";
import ModalDelete from "../modalDelete";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function SCard(props) {
  const [modal, setModal] = useState(false);
  const [type, setType] = useState();
  const navigate = useNavigate();

  return (
    <CardStyle {...props}>
      <div>
        {props.imageFile && (
          <img
            src={URL.createObjectURL(props.imageFile)} // Use createObjectURL para exibir o arquivo
            alt={props.name}
            style={{ width: "100px", height: "100px" }}
          />
        )}
        <h2>{props.name}</h2>
        {props.amount && <p>Quantidade: {props.amount}</p>}
      </div>

      <DivRow gap="10px">
        {!props.max && (
          <>
            
            
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
