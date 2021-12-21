import React from "react";
import styled from "styled-components";

const CustomSelect = styled.select`
  border: 1px solid var(--border-color);
  width: ${(props) => props.block && "100%"};
  padding: 0.8rem 1rem;
  margin: 0.5rem 0;
  outline: none;
  border-radius: ${(props) => props.radius && "3rem"};
  background-color: white;
  color: var(--color-gray);
`;
const Option = styled.option``;

const Select = ({ data, block, radius }) => {
  return (
    <CustomSelect block={block} radius={radius}>
      {data.map((item, index) => (
        <Option key={index} value={item.toLowerCase()}>
          {item}
        </Option>
      ))}
    </CustomSelect>
  );
};

export default Select;
