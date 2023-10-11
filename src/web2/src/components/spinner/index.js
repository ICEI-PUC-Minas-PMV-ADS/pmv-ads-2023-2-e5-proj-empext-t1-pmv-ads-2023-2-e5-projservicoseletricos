import { StyledSpinner } from "./styles";
import React from "react";

const Spinner = (props) => {
  return (
    <StyledSpinner size={props.size} viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
        stroke={props.color || "#fff"}
      />
    </StyledSpinner>
  );
};

export default Spinner;
