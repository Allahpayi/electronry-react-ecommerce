import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Grid from "../components/Grid";
const bannner1 = require("../assets/images/banner-1.jpg");
const bannner2 = require("../assets/images/banner-2.jpg");
const bannner3 = require("../assets/images/banner-3.jpg");
const bannner4 = require("../assets/images/banner-4.jpg");
const bannner5 = require("../assets/images/banner-5.jpg");

const Banner = styled.div`
  padding: 2rem 1rem;
  background-color: var(--color-main2);
`;
const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in-out;
`;
const BannerItem = styled(Link)`
  position: relative;
  border-radius: 0.4rem;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #232323;
    opacity: 0;
    z-index: 2;
    transition: all 0.3s ease;
  }
  &:hover::before {
    opacity: 0.3;
  }
  &:hover ${BannerImg} {
    transform: scale(1.1);
  }
`;

const HomeBanner = () => {
  return (
    <Banner>
      <Grid col={1} mdCol={3} lgCol={3} gap={30}>
        <BannerItem to="/">
          <BannerImg src={bannner1} alt="" />
        </BannerItem>
        <BannerItem to="/">
          <BannerImg src={bannner2} alt="" />
        </BannerItem>
        <BannerItem to="/">
          <BannerImg src={bannner3} alt="" />
        </BannerItem>
      </Grid>
      <Grid col={1} mdCol={2} lgCol={2} gap={30}>
        <BannerItem to="/">
          <BannerImg src={bannner4} alt="" />
        </BannerItem>
        <BannerItem to="/">
          <BannerImg src={bannner5} alt="" />
        </BannerItem>
      </Grid>
    </Banner>
  );
};

export default HomeBanner;
