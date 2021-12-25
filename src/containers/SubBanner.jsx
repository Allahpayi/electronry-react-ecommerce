import React from "react";
import styled from "styled-components";
import Grid from "../components/Grid";
const BannerImg = styled.img`
  margin: auto;
`;
const SubBanner = ({ img }) => {
  return (
    <Grid col={1} mdCol={img.length} lgCol={img.length} gap={20} margin={20}>
      {img.map((item, index) => (
        <BannerImg key={index} src={item} />
      ))}
    </Grid>
  );
};

export default SubBanner;
