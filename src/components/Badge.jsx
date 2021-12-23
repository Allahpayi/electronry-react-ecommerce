import React from "react";
import styled from "styled-components";
const BadgeContainer = styled.span`
  margin: 0.4rem;
  margin-bottom: 0.2rem;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  color: var(--color-main);
  background-color: ${(props) => props.bg};
  &:last-of-type {
    margin: 0 0.4rem;
  }
`;
const Badge = ({ children, color, bg }) => {
  return (
    <BadgeContainer color={color} bg={bg}>
      {children}
    </BadgeContainer>
  );
};

export default Badge;
