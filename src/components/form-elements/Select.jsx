import React from "react";
import styled from "styled-components";

const CustomSelect = styled.select`
  border: 1px solid var(--border-color);
  width: ${(props) => props.block && "100%"};
  padding: ${(props) => props.padding && "0.8rem 1rem"};
  margin: 0.5rem 0;
  margin-right: 0.1rem;
  outline: none;
  border-radius: ${(props) => props.radius && "3rem"};
  text-transform: uppercase;
  background-color: white;
  color: var(--color-gray);
`;
const Option = styled.option`
  text-transform: uppercase;
`;

const Select = ({ data, block, radius, padding, selectedValue, select }) => {
  const changeHandler = (e) => {
    e.preventDefault();
    selectedValue(e.target.value);
  };
  return (
    <CustomSelect
      onKeyUp={changeHandler}
      block={block}
      radius={radius}
      padding={padding}
    >
      {data.map((item, index) => (
        <Option
          defaultValue={item === select}
          key={index}
          value={item.toLowerCase()}
        >
          {item}
        </Option>
      ))}
    </CustomSelect>
  );
};

export default Select;
