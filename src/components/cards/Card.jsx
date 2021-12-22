import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { currencyFormat } from "../../utils/currency-format";
import { addToCart } from "../../redux/actions/cartActions";

const CardActions = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0.4rem;
  top: 0.4rem;
  z-index: 2;
`;

const CardIcon = styled.button`
  width: 2.3rem;
  height: 2.3rem;
  line-height: 2.6rem;
  text-align: center;
  font-size: 1.6rem;
  color: ${(props) => (props.red ? "var(--color-red)" : "var(--color-main)")};
  background-color: transparent;
  transition: all 0.3s ease;
  opacity: 0;
`;

const CardImg = styled.img`
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
  &:hover ${CardIcon} {
    opacity: 1;
  }
  &:hover ${CardHeader}::before {
    opacity: 0.3;
  }
  &:hover ${CardImg} {
    transform: scale(1.2);
  }
`;
const CardLabelGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0.4rem;
  top: 0.4rem;
  z-index: 2;
`;
const CardLabel = styled.span`
  margin: 0.4rem;
  margin-bottom: 0.2rem;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  color: var(--color-main);
  background-color: ${(props) => (props.red ? "var(--color-red)" : "#65BC46")};
  &:last-of-type {
    margin: 0 0.4rem;
  }
`;
const CardBody = styled.div`
  background-color: var(--color-main);
`;
const CardSubTitle = styled.span`
  font-size: 0.7rem;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--color-gray);
`;
const CardTitle = styled(Link)`
  display: block;
  font-weight: 400;
  font-size: 1rem;
  color: var(--color-black);
`;
const CardRaiting = styled.div`
  font-size: 0.9rem;
`;
const RaitingIcon = styled.i`
  color: ${(props) => (props.empty ? "var(--color-gray)" : "#ffe234")};
`;
const CardPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CardMuted = styled.p`
  font-weight: 500;
  margin-right: 0.6rem;
  font-size: 0.9rem;
  text-decoration: line-through;
  color: var(--color-gray);
`;
const CardBold = styled.p`
  font-weight: 500;
  font-size: 1.3rem;
  color: ${(props) => (props.red ? "var(--color-red)" : "var(--color-gray)")};
`;
const Card = ({ product }) => {
  const dispatch = useDispatch();
  let discountPrice = (product.price * (100 - product.discountRate)) / 100;
  const addToCartHandler = (product) => {
    dispatch(
      addToCart({
        product,
        quantity: 1,
        total: product.discount ? discountPrice : product.price,
      })
    );
  };
  return (
    <ProductCard>
      <CardHeader>
        <CardImg src={product.img[0]} alt="" />
        <CardActions>
          <CardIcon className="far fa-heart"></CardIcon>
          {/* <CardIcon red className="fas fa-heart"></CardIcon> */}
          <CardIcon
            onClick={() => addToCartHandler(product)}
            className="fas fa-cart-plus"
          ></CardIcon>
        </CardActions>
        <CardLabelGroup>
          {product.discount ? <CardLabel red>Sale</CardLabel> : null}
          {product.new ? <CardLabel green>New</CardLabel> : null}
        </CardLabelGroup>
      </CardHeader>
      <CardBody>
        <CardSubTitle>{product.categoryName}</CardSubTitle>
        <CardTitle to={`product/${product.id}`}>
          {product.name.slice(0, 20) + "..."}
        </CardTitle>
        <CardRaiting>
          <RaitingIcon className="fas fa-star" />
          <RaitingIcon className="fas fa-star" />
          <RaitingIcon className="fas fa-star" />
          <RaitingIcon className="fas fa-star" />
          <RaitingIcon empty className="fas fa-star" />
        </CardRaiting>
        <CardPrice>
          <CardMuted>
            {product.discount ? currencyFormat(product.price) : ""}
          </CardMuted>
          <CardBold red={product.discount === true}>
            {product.discount
              ? currencyFormat(
                  (product.price * (100 - product.discountRate)) / 100
                )
              : currencyFormat(product.price)}
          </CardBold>
        </CardPrice>
      </CardBody>
    </ProductCard>
  );
};

export default Card;
