import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/grid";
import { Autoplay, Grid } from "swiper";
import { brands } from "../config";
import Section from "./Section";
import styled from "styled-components";
const Img = styled.img` 
padding: 2rem 0;
`
const Brands = () => {
  return (
    <Section title="Featured Brands">
      <Swiper style={{textAlign:"center"}}
      slidesPerView={2}
      spaceBetween = {20}
        breakpoints={{
          512: {
            slidesPerView: 2,
          },
          762: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 6,
          },
        }}
        modules={[Grid,Autoplay]}
        autoplay={{
          delay: 3000,
        }}
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand.id}>
            <Img src={brand.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

export default Brands;
