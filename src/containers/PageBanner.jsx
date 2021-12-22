import React from "react";
import styled from "styled-components";

const BannerImg = styled.img`
  height: 20rem;
  object-fit: cover;
`;
const PageBanner = () => {
  return <BannerImg src="/assets/images/page-banner.jpg" />;
};

export default PageBanner;
