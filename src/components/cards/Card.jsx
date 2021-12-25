import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { currencyFormat } from "../../utils/currency-format";
import { discountPrice } from "../../utils/discount-price";
import { addToCart } from "../../redux/actions/cartActions";
import Rating from "../tools/Rating";
import Text from "../tools/Text";
import Group from "../tools/Group";
import IconButton from "../form-elements/IconButton";
import Badge from "../Badge";

const Icon = styled(IconButton)`
  opacity: 0;
`;

const Img = styled.img`
  border-bottom-left-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
  transition: all 0.3s ease;
`;

const CardHeader = styled.div`
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid var(--border-color);
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    z-index: 1;
    top: 0%;
    left: 0%;
    background-color: #333;
    opacity: 0;
    transition: all 0.3s ease;
  }
`;
const ProductCard = styled.div`
  border-radius: 0.2rem;
  padding-bottom: 0.4rem;
  text-align: center;
  box-shadow: var(--shadow-md);
  &:hover ${Icon} {
    opacity: 1;
  }
  &:hover ${CardHeader}::before {
    opacity: 0.3;
  }
  &:hover ${Img} {
    transform: scale(1.2);
  }
`;
const CardBody = styled.div`
  margin: 0.2rem;
  background-color: var(--color-main);
`;

const Card = ({ product }) => {
  const dispatch = useDispatch();
  const addToCartHandler = (product) => {
    dispatch(
      addToCart({
        product,
        quantity: 1,
        total: product.discount
          ? discountPrice(product.price, product.discountRate)
          : product.price,
      })
    );
  };
  return (
    <ProductCard>
      <CardHeader>
        <Img src={product.img[0]} alt="" />
        <Group
          direction="column"
          position="absolute"
          right="0.4rem"
          top="0.4rem"
          zIndex={2}
        >
          <Icon size="1.8" color="var(--color-main)" className="far fa-heart" />
          <Icon
            size="1.8"
            color="var(--color-main)"
            onClick={() => addToCartHandler(product)}
            className="fas fa-cart-plus"
          />
        </Group>
        <Group
          direction="column"
          position="absolute"
          left="0.4rem"
          top="0.4rem"
          zIndex={2}
        >
          {product.discount ? <Badge bg="var(--color-red)">Sale</Badge> : null}
          {product.newProduct ? <Badge bg="#65BC46">New</Badge> : null}
        </Group>
      </CardHeader>
      <CardBody>
        <Text
          transform="uppercase"
          weight="400"
          color="var(--color-gray)"
          fontSize=".7"
        >
          {product.categoryName}
        </Text>
        <Text color="var(--color-black)" fontSize="1.1" lineHeight="1.4">
          <Link to={`product/${product.id}`}>
            {product.name.slice(0, 20) + "..."}
          </Link>
        </Text>
        <Rating />
        <Group justifyContent="center" alignItems="center" margin=".2rem 0">
          <Text
            color="var(--color-gray)"
            fontSize=".9"
            decoration="line-through"
          >
            {product.discount ? currencyFormat(product.price) : ""}
          </Text>
          <Text
            color={`${
              product.discount ? "var(--color-red)" : "var(--color-gray)"
            }`}
            weight="600"
            fontSize="1.2"
          >
            {product.discount
              ? currencyFormat(
                  discountPrice(product.price, product.discountRate)
                )
              : currencyFormat(product.price)}
          </Text>
        </Group>
      </CardBody>
    </ProductCard>
  );
};

export default Card;
