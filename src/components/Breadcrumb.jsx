import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BreadcrumbContainer = styled.div`
    padding: 1rem 0;
    text-align: center;

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
      <BreadcrumbItem to="/">Home </BreadcrumbItem>
      {data.map((item, index) => (
        <BreadcrumbItem key={index} to={item.href}>
          {item.name}
        </BreadcrumbItem>
      ))}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
