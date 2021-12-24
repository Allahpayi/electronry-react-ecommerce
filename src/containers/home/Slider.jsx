import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper";
import "swiper/css/navigation";

const SliderImg = styled.img`
  width: 100%;
  object-fit: cover;
  @media (max-width: 762px) {
    min-height: 20rem;
  }
`;

const SliderContent = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translate(-10%, -50%);
  @media (max-width: 762px) {
    width: 50%;
  }
`;
const SliderTitle = styled.h1`
  color: var(--color-main);
  font-size: 3rem;
  line-height: 4rem;
  & span {
    color: var(--light-green);
  }
  @media (max-width: 992px) {
    font-size: 2rem;
    line-height: 3rem;
  }
  @media (max-width: 762px) {
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;

const SliderText = styled.p`
  margin-bottom: 1rem;
  color: var(--color-main);
`;
const SliderButton = styled.button`
  padding: 0.8rem 1.6rem;
  border-radius: 3rem;
  border: 1px solid var(--color-main);
  font-weight: 800;
  font-family: var(--font-arimo);
  color: var(--color-main);
  background-color: transparent;
  transition: all 0.3s ease;
  &:hover {
    border: 1px solid var(--color-main);
    color: var(--color-black);
    background-color: var(--color-main);
  }
`;
const PrevIcon = styled.span`
  color: var(--color-main);

  @media (max-width: 762px) {
    top: 95%;
    left: 50%;
    transform: translate(-100%, -50%);
    &::after {
      font-size: 1.7rem;
    }
  }
`;

const NextIcon = styled.span`
  color: var(--color-main);
  @media (max-width: 762px) {
    top: 95%;
    right: 50%;
    transform: translate(100%, -50%);
    &::after {
      font-size: 1.7rem;
    }
  }
`;
const Slider = () => {
  return (
    <Swiper
      loop
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      autoplay={{
        delay: 3000,
      }}
      modules={[Navigation, EffectFade, Autoplay]}
      effect="flip"
    >
      <PrevIcon className="swiper-button-prev"></PrevIcon>
      <NextIcon className="swiper-button-next"></NextIcon>
      <SwiperSlide>
        <SliderImg src="/assets/images/slider-1.jpg" alt="Slider Img" />
        <SliderContent>
          <SliderTitle>
            <span>Huge Saving</span> on <br /> UHD Televisions
          </SliderTitle>
          <SliderText>Sale up to 70% off on selected items*</SliderText>
          <SliderButton>Shop Now</SliderButton>
        </SliderContent>
      </SwiperSlide>
      <SwiperSlide>
        <SliderImg src="/assets/images/slider-1.jpg" alt="Slider Img" />
        <SliderContent>
          <SliderTitle>
            <span>Sale off 75%</span> on <br /> UHD Televisions
          </SliderTitle>
          <SliderText>Sale up to 70% off on selected items*</SliderText>
          <SliderButton>Shop Now</SliderButton>
        </SliderContent>
      </SwiperSlide>
      <SwiperSlide>
        <SliderImg src="/assets/images/slider-1.jpg" alt="Slider Img" />
        <SliderContent>
          <SliderTitle>
            <span>Huge Saving</span> on <br /> UHD Televisions
          </SliderTitle>
          <SliderText>Sale up to 70% off on selected items*</SliderText>
          <SliderButton>Shop Now</SliderButton>
        </SliderContent>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
