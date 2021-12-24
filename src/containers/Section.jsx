import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: 3rem 1rem;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: ${(props) => (props.center ? "space-between" : "center")};
  align-items: center;
`;
const SectionTitle = styled.h2`
  text-transform: capitalize;
  color: ${(props) => (props.red ? "var(--color-red)" : "var(--color-black)")};
`;
const SectionLink = styled(Link)`
  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 1px;
    background-color: var(--color-black);
    transition: all 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;

const Section = ({ title, red, link, children }) => {
  return (
    <Container>
      <SectionHeader center={link}>
        <SectionTitle red={red}>{title}</SectionTitle>
        {link ? <SectionLink to="/products">All Products</SectionLink> : ""}
      </SectionHeader>
      {children}
    </Container>
  );
};

export default Section;
