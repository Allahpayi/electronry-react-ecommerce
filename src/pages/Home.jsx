import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import Helmet from "../components/Helmet";
import {
  getBestSellingProducts,
  getDiscountProducts,
  getMostPopularProducts,
  getNewProducts,
  getTopRatedProducts,
  loadProducts,
} from "../redux/actions/productActions";
import { loadCategories } from "../redux/actions/categoryActions";

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
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  const categories = useSelector((state) => state.allCategories.categories);
  const discountProducts = useSelector(
    (state) => state.allProducts.discountProducts
  );
  const newProducts = useSelector((state) => state.allProducts.newProducts);
  const bestSellingProducts = useSelector(
    (state) => state.allProducts.bestSellingProducts
  );
  const topRatedProducts = useSelector(
    (state) => state.allProducts.topRatedProducts
  );
  const mostPopularProducts = useSelector(
    (state) => state.allProducts.mostPopularProducts
  );

  useEffect(async () => {
    await dispatch(loadProducts());
    await dispatch(loadCategories());
  }, []);

  useEffect(() => {
    dispatch(getDiscountProducts());
    dispatch(getNewProducts());
    dispatch(getBestSellingProducts());
    dispatch(getTopRatedProducts());
    dispatch(getMostPopularProducts());
  }, [products]);

  return (
    <Helmet title="Home">
      <Slider />
      <Policy />
      <Banner />
      <Section red title="flash deals" link={true}>
        <Grid col={1} smCol={2} mdCol={3} lgCol={5} gap={20}>
          {discountProducts.slice(0, 5).map((product) => (
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
          {newProducts.slice(0, 5).map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </Grid>
      </Section>
      <SubBanner img={["/assets/images/banner-appliances.jpg"]} />
      <Section title="Top Rated" link={true}>
        <Grid col={1} smCol={2} mdCol={3} lgCol={5} gap={20}>
          {topRatedProducts.slice(0, 5).map((product) => (
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
          {bestSellingProducts.slice(0, 5).map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </Grid>
      </Section>
      <Brands />
      <Section title="Most Popular" link={true}>
        <Grid col={1} smCol={2} mdCol={3} lgCol={5} gap={20}>
          {mostPopularProducts.slice(0, 5).map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </Grid>
      </Section>
      <About />
    </Helmet>
  );
};

export default Home;
