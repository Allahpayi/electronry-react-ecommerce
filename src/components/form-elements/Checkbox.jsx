import React from "react";
import styled from "styled-components";

const Input = styled.input`
  margin: ${(props) => props.margin};
`;

const Checkbox = ({ onClick, checked, margin }) => {
  return (
    <Input
      defaultChecked={checked}
      margin={margin}
      onClick={onClick}
      type="checkbox"
    />
  );
};

export default Checkbox;
