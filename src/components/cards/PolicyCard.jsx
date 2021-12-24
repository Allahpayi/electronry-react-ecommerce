import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Text from "../tools/Text";

const Card = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0.8rem 0 1rem 0;
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

const Icon = styled.i`
  font-size: 2.5rem;
  margin-right: 1rem;
`;

const PolicyCard = ({ data }) => {
  return (
    <Card to="/">
      <Icon className={data.icon}></Icon>
      <Text>{data.text}</Text>
    </Card>
  );
};

export default PolicyCard;
