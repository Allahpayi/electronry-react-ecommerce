import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IconButton from "./form-elements/IconButton";
const BreadcrumbContainer = styled.div`
  padding: 1rem;
`;

const BreadcrumbItem = styled(Link)`
  text-transform: capitalize;
  &:not(:last-of-type)::after {
    content: "/";
    margin-right: 0.2rem;
  }
`;

const Breadcrumb = ({ data }) => {
  return (
    <BreadcrumbContainer>
      <BreadcrumbItem to="/">
        <IconButton size="1.1" className="fas fa-home-lg-alt" />
      </BreadcrumbItem>
      {data.map((item, index) => (
        <BreadcrumbItem key={index} to={item.href}>
          {item.name}
        </BreadcrumbItem>
      ))}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
