import React from "react";
import FeaturedProducts from "../containers/FeaturedProducts";
import HomeBanner from "../containers/HomeBanner";
import HomeSlider from "../containers/HomeSlider";
import Policy from "../containers/Policy";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <Policy />
      <HomeBanner />
      <FeaturedProducts/>
    </>
  );
};

export default Home;
