import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Text from '../tools/Text';

const CardContainer = styled(Link)`
  display: block;
  text-align: center;
  @media (max-width: 762px) {
    width: 100px;
  }
`;
const Img = styled.img`
  object-fit: cover;
`;

const CategoryCard = ({ category }) => {
  return (
    <CardContainer to={category.url}>
      <Img src={category.img} />
      <Text>{category.name}</Text>
    </CardContainer>
  );
};

export default CategoryCard;
