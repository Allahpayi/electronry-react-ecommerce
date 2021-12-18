import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ItemContainer = styled.div``;
const Title = styled.h2`
  font-size: 1.1rem;
  font-weight: 500;
  text-transform: capitalize;
  color: var(--color-black);
`;
const List = styled.ul`
  margin-top: 0.4rem;
`;
const ListItem = styled.li`
  padding: 0.2rem 0;
  font-size: 14px;
`;
const ListItemLink = styled(Link)`
  font-weight: 300;
  color: var(--color-black2);
`;
const Icon = styled.i`
  margin-right: 0.4rem;
  font-size: 0.8rem;
`;
const Item = ({ children, title, list }) => {
  return (
    <ItemContainer>
      <Title>{title}</Title>
      <List>
        {list.map((item,index) => (
          <ListItem key={index}>
            <ListItemLink to="/">
              <Icon
                className={item.icon ? item.icon : "fal fa-chevron-right"}
              ></Icon>
              {item.name}
            </ListItemLink>
          </ListItem>
        ))}
      </List>
      {children}
    </ItemContainer>
  );
};

export default Item;
