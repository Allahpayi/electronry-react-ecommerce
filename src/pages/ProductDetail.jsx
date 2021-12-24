import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { getProduct } from "../redux/actions/productActions";
import Breadcrumb from "../components/Breadcrumb";
import Rating from "../components/tools/Rating";

const ProductDetailContainer = styled.div``;
const ProductDetailHeader = styled.div`
  margin-top: 1rem;
`;
const ProductDetailBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ProductImages = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const ImageWrapper = styled.div`
  margin: 1rem;

  border: 1px solid var(--border-color);
  overflow: hidden;
`;

const ProductMainImg = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: contain;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.25);
  }
  @media (max-width: 992px) {
    height: 60vh;
  }
`;
const ProductOtherImages = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
`;

const ProductImg = styled.img`
  width: 5rem;
  border: 1px solid var(--border-color);
`;

const ProductInfo = styled.div``;

const ProductTitle = styled.h3``;

const Group = styled.div``;

const List = styled.ul``;

const ListItem = styled.li``;

const ListLink = styled(Link)``;

const BoldText = styled.p``;

const MutedText = styled.p``;

const Text = styled.p``;

const ProductDetail = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.allProducts.selectedProduct);
  const [activeImg, setActiveImg] = useState(null);
  const params = useParams();
  const id = Number(params.id);
  const breadcrumbData = [
    { name: " Product ", href: "/products" },
    { name: product.name, href: `/product/${id}` },
  ];

  const fetchProduct = async () => {
    const response = await axios
      .get(`http://localhost:3000/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(getProduct(response.data));
    setActiveImg(response.data.img[0]);
  };
  useEffect(() => {
    fetchProduct();
  }, [params, id]);

  return (
    <ProductDetailContainer>
      <ProductDetailHeader>
        <Breadcrumb data={breadcrumbData} />
      </ProductDetailHeader>
      <ProductDetailBody>
        <ProductImages>
          <ImageWrapper>
            <ProductMainImg src={activeImg} />
          </ImageWrapper>
          <ProductOtherImages>
            {product.img?.map((productImg, index) => (
              <ProductImg
                onClick={() => setActiveImg(productImg)}
                key={index}
                src={productImg}
                alt={product.name + index}
              />
            ))}
          </ProductOtherImages>
        </ProductImages>
        <ProductInfo>
          <ProductTitle>{product.name}</ProductTitle>
          <Rating />
        </ProductInfo>
      </ProductDetailBody>
    </ProductDetailContainer>
  );
};

export default ProductDetail;
