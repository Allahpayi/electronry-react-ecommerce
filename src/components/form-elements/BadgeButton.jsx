import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  position: relative;
  background-color: unset;
  cursor: pointer;
`;
const Badge = styled.span`
  display: inline-block;
  position: absolute;
  top: -0.6rem;
  right: -0.6rem;
  width: 1.2rem;
  height: 1.2rem;
  line-height: 1.3rem;
  text-align: center;
  border-radius: 50%;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
`;

const BadgeButton = ({ children, onClick, badgeText, bg, color }) => {
  return (
    <ButtonContainer onClick={onClick}>
      {children}
      <Badge  bg={bg} color={color}>{badgeText}</Badge>
    </ButtonContainer>
  );
};

export default BadgeButton;
