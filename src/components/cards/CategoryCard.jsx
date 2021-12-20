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
const CardTitle = styled.p`
  display: block;
  color: var(--color-gray);
`;

const CategoryCard = ({ category }) => {
  return (
    <CardContainer to={category.url}>
      <CardImage src={category.img} />
      <CardTitle>{category.name}</CardTitle>
    </CardContainer>
  );
};

export default CategoryCard;
