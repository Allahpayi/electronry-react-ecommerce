import React from "react";
import styled from "styled-components";
import AboutCard from "../../components/cards/AboutCard";
import Grid from "../../components/Grid";
import { aboutUs } from "../../config";

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

const About = () => {
  return (
    <AboutUsContainer>
      <Title>
        <span>Why shop</span> with us?
      </Title>
      <Grid col={1} mdCol={2} lgCol={4} gap={20}>
        {aboutUs.map((item, index) => (
          <AboutCard key={index} item={item} />
        ))}
      </Grid>
    </AboutUsContainer>
  );
};

export default About;
