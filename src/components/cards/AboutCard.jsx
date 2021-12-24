import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Group from "../tools/Group";
import Text from "../tools/Text";

const Img = styled.img``;

const AboutCard = ({ item }) => {
  return (
    <Group alignItems="center" direction="column" key={item.id}>
      <Img src={item.img} />
      <Text margin="1rem 0 .4rem 0" fontSize="1.2" weight="500">
        {item.name}
      </Text>
      <Text weight="300">{item.description}</Text>
      <Text weight="300" decoration="underline">
        <Link fontSize=".9" to={item.url}>
          Learn More
        </Link>
      </Text>
    </Group>
  );
};

export default AboutCard;
