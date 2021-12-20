import React from "react";
import styled from "styled-components";
import Copyright from "../components/footer/Copyright";
import Item from "../components/footer/Item";
import SignUp from "../components/footer/SignUp";
import SosialIcons from "../components/footer/SosialIcons";
import Grid from "../components/Grid";
import { brands, contactInfo, furtherInfo } from "../config";
import categories from "../fake-data/categories";

const FooterContainer = styled.footer`
  padding: 4rem;
  background-color: var(--color-main2);
  @media (max-width: 762px) {
    padding-bottom: 1rem;
  }
`;
const Footer = () => {
  const sliceCategories = categories.slice(0,8)
  return (
    <>
      <FooterContainer>
        <SignUp />
        <Grid col={1} mdCol={2} lgCol={4} gap={20}>
          <Item title="categories" list={sliceCategories} />
          <Item title="Top Brands" list={brands} />
          <Item title="Further Info." list={furtherInfo} />
          <Item title="Contact Info." list={contactInfo}>
            <SosialIcons />
          </Item>
        </Grid>
      </FooterContainer>
      <Copyright />
    </>
  );
};

export default Footer;
