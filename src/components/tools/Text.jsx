import React from "react";
import styled from "styled-components";

const TextContainer = styled.p`
  margin: ${(props) => props.margin || "0 .2rem"};
  line-height: ${(props) => props.lineHeight + "rem"};
  text-align: ${(props) => props.align};
  text-transform: ${(props) => props.transform};
  text-decoration: ${(props) => props.decoration};
  font-size: ${(props) => props.fontSize + "rem"};
  text-decoration: ${(props) => props.decoration};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
`;

const Text = ({
  children,
  decoration,
  color,
  margin,
  transform,
  fontSize,
  weight,
  lineHeight,
  align,
}) => {
  return (
    <TextContainer
      weight={weight}
      color={color}
      transform={transform}
      decoration={decoration}
      fontSize={fontSize}
      margin={margin}
      lineHeight={lineHeight}
      align={align}
    >
      {children}
    </TextContainer>
  );
};

export default Text;
