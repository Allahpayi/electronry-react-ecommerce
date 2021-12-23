import React from "react";
import styled from "styled-components";
const IconButtonContainer = styled.button`
  width: 2.3rem;
  height: 2.3rem;
  line-height: 2.6rem;
  text-align: center;
  font-size: ${(props) => props.size +"rem" || "1.6rem"};
  color: ${(props) => props.color || "var(--color-black)"};
  background-color: transparent;
  transition: all 0.3s ease;
`;

const IconButton = ({ className, onClick, color, size }) => {
  return (
    <IconButtonContainer
      size={size}
      color={color}
      onClick={onClick}
      className={className}
    />
  );
};

export default IconButton;
