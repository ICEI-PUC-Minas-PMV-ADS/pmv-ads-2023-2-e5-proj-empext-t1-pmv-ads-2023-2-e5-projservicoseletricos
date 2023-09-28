import styled from "styled-components";

export const MessageContainer = styled.div`
  width: 100%;
  padding: 10px 15px;
  border-radius: 5px;
  display: ${(props) => (props.display ? "flex" : "none")};

  p {
    color: ${(props) => {
      if (props.type === "error") return "#ff5252";
      else if (props.type === "success") return "#b9de51";
      else return "#ccc";
    }};
    font-size: 14px;
  }
`;
