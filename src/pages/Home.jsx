import React from "react";
import styled from "styled-components";
import Section from "../containers/Section";
import Banner from "../containers/home/Banner";
import Slider from "../containers/home/Slider";
import About from "../containers/home/About";
import Policy from "../containers/Policy";
import Card from "../components/cards/Card";
import Grid from "../components/Grid";
import CategoryCard from "../components/cards/CategoryCard";
import SubBanner from "../containers/SubBanner";
import Brands from "../containers/Brands";
import { useSelector } from "react-redux";

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
  const products = useSelector((state) => state.allProducts.products);
  const categories = useSelector((state) => state.allCategories.categories);

  const discount = products.filter((product) => product.discount).slice(0, 5);
  const newProduct = products
    .filter((product) => product.new && !product.discount)
    .slice(0, 5);
  const bestSelling = products
    .filter((product) => product.bestSelling)
    .slice(0, 5);
  const topRated = products.filter((product) => product.topRated).slice(0, 5);
  const mostPopular = products
    .filter((product) => product.mostPopular)
    .slice(0, 5);

  return (
    <>
      <Slider />
      <Policy />
      <Banner />
      <Section red title="flash deals" link={true}>
        <Grid col={1} smCol={2} mdCol={3} lgCol={5} gap={20}>
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
        <Grid col={1} smCol={2} mdCol={3} lgCol={5} gap={20}>
          {newProduct.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </Grid>
      </Section>
      <SubBanner img={["/assets/images/banner-appliances.jpg"]} />
      <Section title="Top Rated" link={true}>
        <Grid col={1} smCol={2} mdCol={3} lgCol={5} gap={20}>
          {topRated.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </Grid>
      </Section>
      <SubBanner
        img={[
          "/assets/images/sub-banner-1.jpg",
          "/assets/images/sub-banner-2.jpg",
        ]}
      />
      <Section title="Best Selling" link={true}>
        <Grid col={1} smCol={2} mdCol={3} lgCol={5} gap={20}>
          {bestSelling.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </Grid>
      </Section>
      <Brands />
      <Section title="Most Popular" link={true}>
        <Grid col={1} smCol={2} mdCol={3} lgCol={5} gap={20}>
          {mostPopular.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </Grid>
      </Section>
      <About />
    </>
  );
};

export default Home;
