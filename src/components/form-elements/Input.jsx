import React from "react";
import styled from "styled-components";

const CustomInput = styled.input`
  display: inline-block;
  transition: all 0.3s ease;
  width: ${(props) => props.block && "100%"};
  border: 1px solid var(--border-color);
  padding: 0.8rem 1rem;
  margin: 0.5rem 0;
  border-radius: ${(props) => props.radius && "3rem"};
  text-align: ${(props) => props.textCenter && "center"};
  background-color: white;
  color: var(--color-black);
`;
const Input = ({
  placeholder,
  type,
  value,
  min,
  max,
  textCenter,
  block,
  radius,
}) => {
  return (
    <CustomInput
      type={type}
      placeholder={placeholder}
      defaultValue={value}
      max={max}
      min={min}
      block={block}
      radius={radius}
      textCenter={textCenter}
    />
  );
};

export default Input;
