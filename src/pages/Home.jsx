import React from "react";
import styled from "styled-components";
import Section from "../containers/Section";
import HomeBanner from "../containers/HomeBanner";
import HomeSlider from "../containers/HomeSlider";
import Policy from "../containers/Policy";
import allProducts from "../fake-data/products";
import Card from "../components/Card";
import Grid from "../components/Grid";
import categories from "../fake-data/categories";
import CategoryCard from "../components/CategoryCard";
import HomeSubBanner from "../containers/HomeSubBanner";
import Brands from '../containers/Brands';

const BannerMiddle = styled.img`
  display: none;
  @media (min-width: 762px) {
    display: ${(props) => (props.mobile ? "block" : "none")};
  }
  @media (max-width: 762px) {
    display: ${(props) => (props.desctop ? "block" : "none")};
  }
`;

const Home = () => {
  const discount = allProducts
    .filter((product) => product.discount)
    .slice(0, 5);
  const newProduct = allProducts
    .filter((product) => product.new && !product.discount)
    .slice(0, 5);
  const bestSelling = allProducts
    .filter((product) => product.bestSelling)
    .slice(0, 5);
  const topRated = allProducts
    .filter((product) => product.topRated)
    .slice(0, 5);
  const mostPopular = allProducts
    .filter((product) => product.mostPopular)
    .slice(0, 5);
  return (
    <>
      <HomeSlider />
      <Policy />
      <HomeBanner />
      <Section red title="flash deals" link={true}>
        <Grid col={1} mdCol={3} lgCol={5} gap={20}>
          {discount.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </Grid>
      </Section>
      <BannerMiddle desctop src="/assets/images/cyber-monday.jpg" />
      <BannerMiddle mobile src="/assets/images/banner-custom-middle.jpg" />
      <Section title="Shop by Categories">
        <Grid scroll col={12} mdCol={3} lgCol={6} gap={30}>
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </Grid>
      </Section>
      <Section title="What's New" link={true}>
        <Grid col={1} mdCol={3} lgCol={5} gap={20}>
          {newProduct.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </Grid>
      </Section>
      <HomeSubBanner
        img={[
          "/assets/images/banner-appliances.jpg",
        ]}
      />
      <Section title="Top Rated" link={true}>
        <Grid col={1} mdCol={3} lgCol={5} gap={20}>
          {topRated.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </Grid>
      </Section>
      <HomeSubBanner
        img={[
          "/assets/images/sub-banner-1.jpg",
          "/assets/images/sub-banner-2.jpg",
        ]}
      />
      <Section title="Best Selling" link={true}>
        <Grid col={1} mdCol={3} lgCol={5} gap={20}>
          {bestSelling.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </Grid>
      </Section>
      <Brands/>
      <Section title="Most Popular" link={true}>
        <Grid col={1} mdCol={3} lgCol={5} gap={20}>
          {mostPopular.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </Grid>
      </Section>
    </>
  );
};

export default Home;
