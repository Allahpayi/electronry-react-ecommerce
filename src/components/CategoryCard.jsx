import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled(Link)`
  display: block;
  text-align: center;
  @media (max-width: 762px) {
    width: 100px;
  }
`;
const CardImage = styled.img`
  object-fit: cover;
`;
const CardLink = styled.p`
  display: block;
  color: var(--color-gray);
`;

const CategoryCard = ({ category }) => {
  return (
    <CardContainer to={category.slug}>
      <CardImage src={category.img} />
      <CardLink to={category.slug}>{category.name}</CardLink>
    </CardContainer>
  );
};

export default CategoryCard;
