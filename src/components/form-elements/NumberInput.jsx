import React, { useRef } from "react";
import styled from "styled-components";
const Input = styled.input`
  width: 4rem;
  padding: 0.8rem;
  border: 1px solid var(--color-gray);
  text-align: center;
`;
const NumberInput = ({ value, min, max, onChange }) => {
  const inputRef = useRef(1);
  return (
    <Input
      ref={inputRef}
      type="number"
      onChange={() => onChange(inputRef.current.value)}
      min={min}
      max={max}
      defaultValue={value}
      inputmode="numeric"
      pattern="[0-9]*"
    />
  );
};

export default NumberInput;
