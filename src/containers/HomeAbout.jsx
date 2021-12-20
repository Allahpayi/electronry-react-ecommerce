import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Grid from "../components/Grid";
import { aboutUs } from "../config";

const AboutUsContainer = styled.div`
  padding: 3rem 1rem;
  background-image: url("/assets/images/bg-us.jpg");
  background-size: contain;
  background-position: center;
  text-align: center;
  color: var(--color-main);
`;
const Title = styled.h1`
  color: var(--color-main);
  margin-bottom: 3rem;
  & span {
    color: var(--light-green);
  }
`;

const AboutCard = styled.div`
  cursor: pointer;
`;
const CardImg = styled.img``;
const CardTitle = styled.p`
  padding-top: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: capitalize;
  font-family: var(--font-arimo);
`;
const CardText = styled.p`
  padding-top: 1rem;
`;
const CardLink = styled(Link)`
  display: inline-block;
  padding-top: 1rem;
  font-weight: 300;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--color-main);
  }
`;

const HomeAbout = () => {
  return (
    <AboutUsContainer>
      <Title>
        <span>Why shop</span> with us?
      </Title>
      <Grid col={1} mdCol={2} lgCol={4} gap={20}>
        {aboutUs.map((item) => (
          <AboutCard>
            <CardImg src={item.img} />
            <CardTitle>{item.name}</CardTitle>
            <CardText>{item.description}</CardText>
            <CardLink to={item.url}>Learn More</CardLink>
          </AboutCard>
        ))}
      </Grid>
    </AboutUsContainer>
  );
};

export default HomeAbout;
