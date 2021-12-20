import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const CardText = styled.p``;
const Card = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0.8rem 0 1rem 0;
  color: var(--color-black);
  ${CardText} {
    &::after {
      content: "";
      display: block;
      width: 0%;
      height: 1px;
      background-color: var(--color-black);
      transition: width 0.4s ease;
    }
  }
  &:hover ${CardText} {
    &::after {
      width: 100%;
    }
  }

  @media (min-width: 762px) {
    &:not(:last-of-type)::after {
      content: "";
      display: block;
      position: absolute;
      right: 0;
      width: 1px;
      height: 3rem;
      background-color: var(--border-color);
    }
  }
  @media (max-width: 762px) {
    &:not(:last-of-type) {
      border-bottom: 1px solid var(--border-color);
    }
  }
`;
const CardIcon = styled.i`
  font-size: 2.5rem;
  margin-right: 1rem;
`;

const PolicyCard = ({ data }) => {
  return (
    <Card to="/">
      <CardIcon className={data.icon}></CardIcon>
      <CardText>{data.text}</CardText>
    </Card>
  );
};

export default PolicyCard;
