import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Text from "../tools/Text";

const ItemContainer = styled.div``;
const List = styled.ul`
  margin-top: 0.4rem;
`;
const Icon = styled.i`
  margin-right: 0.4rem;
  font-size: 0.8rem;
`;
const Item = ({ children, title, list }) => {
  return (
    <ItemContainer>
      <Text fontSize="1.2" weight="500" transform="capitalize">
        {title}
      </Text>
      <List>
        {list.map((item, index) => (
          <Text margin='.4rem 0' weight="200" color="var(--color-gray)" key={index}>
            <Link to={item.url}>
              <Icon
                className={item.icon ? item.icon : "fal fa-chevron-right"}
              ></Icon>
              {item.name}
            </Link>
          </Text>
        ))}
      </List>
      {children}
    </ItemContainer>
  );
};

export default Item;
