import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Grid from "../../components/Grid";

const BannerContainer = styled.div`
  padding: 2rem 1rem;
  padding-top: 1px;
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

const Banner = () => {
  return (
    <BannerContainer>
      <Grid col={1} mdCol={3} lgCol={3} gap={30}>
        <BannerItem to="/">
          <BannerImg src="/assets/images/banner-1.jpg" alt="" />
        </BannerItem>
        <BannerItem to="/">
          <BannerImg src="/assets/images/banner-2.jpg" alt="" />
        </BannerItem>
        <BannerItem to="/">
          <BannerImg src="/assets/images/banner-3.jpg" alt="" />
        </BannerItem>
      </Grid>
      {/* <Grid col={1} mdCol={2} lgCol={2} gap={30}>
        <BannerItem to="/">
          <BannerImg src="/assets/images/banner-4.jpg" alt="" />
        </BannerItem>
        <BannerItem to="/">
          <BannerImg src="/assets/images/banner-5.jpg" alt="" />
        </BannerItem>
      </Grid> */}
    </BannerContainer>
  );
};

export default Banner;
