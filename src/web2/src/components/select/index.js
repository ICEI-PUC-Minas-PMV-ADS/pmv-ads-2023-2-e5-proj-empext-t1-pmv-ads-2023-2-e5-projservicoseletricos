import { SelectStyle, Container, Drop } from "./styles";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

export default function SelectPersonality(props) {
  const [openDrop, setOpenDrop] = useState(false);
  return (
    <Container>
      <SelectStyle onClick={() => setOpenDrop(!openDrop)}>
        {props.value}
        {openDrop ? (
          <MdKeyboardArrowDown className="icon" />
        ) : (
          <MdKeyboardArrowRight className="icon" />
        )}
      </SelectStyle>
      {openDrop && (
        <Drop>
          <ul>
            {props.itensList.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    if (props.setActualCategory) {
                      props.setActualCategory(index);
                    }
                    props.onChange(item.id);
                    setOpenDrop(false);
                  }}
                >
                  {item.nome}
                </li>
              );
            })}
          </ul>
        </Drop>
      )}
    </Container>
  );
}
