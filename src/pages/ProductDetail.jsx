import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getBestSellingProducts,
  getProduct,
  loadProducts,
} from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import { currencyFormat } from "../utils/currency-format";
import { discountPrice } from "../utils/discount-price";
import Breadcrumb from "../components/Breadcrumb";
import Rating from "../components/tools/Rating";
import Group from "../components/tools/Group";
import Text from "../components/tools/Text";
import Button from "../components/form-elements/Button";
import NumberInput from "../components/form-elements/NumberInput";
import Helmet from "../components/Helmet";
import IconButton from "../components/form-elements/IconButton";
import Section from "../containers/Section";
import Grid from "../components/Grid";
import Card from "../components/cards/Card";
import SubBanner from "../containers/SubBanner";
import { useCallback } from "react";

const ProductDetailContainer = styled.div``;
const ProductDetailHeader = styled.div`
  margin-top: 1rem;
`;
const ProductDetailBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  padding: 0 1rem;
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;
const ProductImages = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const ImageWrapper = styled.div`
  margin-bottom: 1rem;
  border: 1px solid var(--border-color);
  overflow: hidden;
`;
const ProductMainImg = styled.img`
  width: 100%;
  height: 85vh;
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
const Size = styled.span`
  margin-right: 0.4rem;
  width: 3.5rem;
  height: 2.2rem;
  text-transform: uppercase;
  text-align: center;
  line-height: 2.2rem;
  border: 1px solid var(--border-color);
  cursor: pointer;
  &.active {
    background-color: var(--color-black);
    border-color: var(--color-main2);
    color: var(--color-main);
  }
`;
const Color = styled.span`
  margin-right: 0.4rem;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  line-height: 2;
  font-size: 1.2rem;
  text-transform: uppercase;
  text-align: center;
  color: var(--color-main);
  background-color: ${(props) => props.item};
  cursor: pointer;
`;

const ProductDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const allProducts = useSelector((state) => state.allProducts.products);
  const selectedProduct = useSelector(
    (state) => state.allProducts.selectedProduct
  );
  const bestSellingProducts = useSelector(
    (state) => state.allProducts.bestSellingProducts
  );
  const cart = useSelector((state) => state.cart);
  const [activeImg, setActiveImg] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [addedCart, setAddedCart] = useState(false);
  const id = Number(params.id);
  const breadcrumbData = [
    { name: " Product ", href: "/products" },
    { name: selectedProduct.name, href: `/product/${id}` },
  ];
  // eslint-disable-next-line
  const addedItemCart = () => {
    // eslint-disable-next-line
    cart.items.map((item) => {
      if (item.product.id === id) {
        setSelectedColor(item.color);
        setSelectedSize(item.size);
        setAddedCart(true);
      } else {
        setSelectedSize(selectedProduct.size[0]);
        setSelectedColor(selectedProduct.color[0]);
      }
    });
  };

  const addToCartHandler = (product) => {
    dispatch(
      addToCart({
        product,
        quantity: quantity,
        total: selectedProduct.discount
          ? discountPrice(selectedProduct.price, selectedProduct.discountRate)
          : selectedProduct.price,
        size: selectedSize,
        color: selectedColor,
      })
    );
  };

  const loadData = useCallback(async () => {
    await dispatch(loadProducts());
  }, [dispatch]);
  const getFilteredData = useCallback(async () => {
    await dispatch(getProduct(id));
    await dispatch(getBestSellingProducts());
  }, [dispatch, id]);

  const setSelectedData = async () => {
    await setActiveImg(selectedProduct.img[0]);
    await addedItemCart();
  };

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    getFilteredData();
  }, [getFilteredData, allProducts]);

  useEffect(() => {
    setSelectedData();
    // eslint-disable-next-line
  }, [selectedProduct]);

  return (
    <Helmet title={selectedProduct.name}>
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
              {selectedProduct.img &&
                selectedProduct.img.map((productImg, index) => (
                  <ProductImg
                    onClick={() => setActiveImg(productImg)}
                    key={index}
                    src={productImg}
                    alt={selectedProduct.name + index}
                  />
                ))}
            </ProductOtherImages>
          </ProductImages>
          <ProductInfo>
            <Text fontSize="1.5" lineHeight="2" weight="500">
              {selectedProduct.name}
            </Text>
            <Group alignItems="center" margin=".6rem 0">
              <Rating />
              <Text
                margin="0 2rem 0 .5rem"
                color="var(--color-gray)"
                fontSize=".9"
                weight="300"
              >
                2 reviews
              </Text>
              {selectedProduct.discount && (
                <Text color="var(--color-red)">
                  <i className="fal fa-fire-alt"></i> 8 sold in last 25 hours
                </Text>
              )}
            </Group>
            <Group>
              <Text color="var(--color-gray)" weight="300">
                Vendor:
              </Text>
              <Text>{selectedProduct.vendor}</Text>
            </Group>
            <Group>
              <Text color="var(--color-gray)" weight="300">
                SKU:
              </Text>
              <Text>{selectedProduct.sku}</Text>
            </Group>
            <Group>
              <Text color="var(--color-gray)" weight="300">
                Availability:
              </Text>
              <Text>{selectedProduct.availability}</Text>
            </Group>
            <Group>
              <Text color="var(--color-gray)" weight="300">
                Product Type:
              </Text>
              <Text>{selectedProduct.productType}</Text>
            </Group>
            <Group margin=".6rem 0 0 0 " alignItems="center">
              <Text
                margin="0 1rem 0 .2rem"
                color={`${selectedProduct.discount && "var(--color-red)"}`}
                fontSize="1.4"
                weight="600"
              >
                {currencyFormat(selectedProduct.price)}
              </Text>
              {selectedProduct.discount && (
                <Text
                  color="var(--color-black2)"
                  fontSize="1.4"
                  decoration="line-through"
                  weight="300"
                >
                  {currencyFormat(
                    discountPrice(
                      selectedProduct.price,
                      selectedProduct.discountRate
                    )
                  )}
                </Text>
              )}
            </Group>
            <Text weight="300">{selectedProduct.description}</Text>
            <Group direction="column" margin=".6rem 0 0 0">
              <Group margin="0 0 .4rem 0">
                <Text color="var(--color-gray)">Size:</Text>
                <Text transform="uppercase">{selectedSize}</Text>
              </Group>
              <Group>
                {selectedProduct.size &&
                  selectedProduct.size.map((item) => (
                    <Size
                      key={item}
                      onClick={() => setSelectedSize(item)}
                      className={`${selectedSize === item && "active"}`}
                    >
                      {item}
                    </Size>
                  ))}
              </Group>
            </Group>
            <Group direction="column" margin="1rem 0 0 0">
              <Group margin="0 0 .4rem 0">
                <Text color="var(--color-gray)">Color:</Text>
                <Text transform="capitalize">{selectedColor}</Text>
              </Group>
              <Group>
                {selectedProduct.color &&
                  selectedProduct.color.map((item) => (
                    <Color
                      key={item}
                      item={item}
                      onClick={() => setSelectedColor(item)}
                      className={`${selectedColor === item && "active"}`}
                    >
                      {item === selectedColor && (
                        <i className="fas fa-check"></i>
                      )}
                    </Color>
                  ))}
              </Group>
            </Group>
            <Group alignItems="center" margin="1rem 0">
              <Text weight="400" margin="0 .6rem 0 .2rem">
                Subtotal:
              </Text>
              <Text weight="500" fontSize="1.1">
                {selectedProduct.discount
                  ? currencyFormat(
                      discountPrice(
                        selectedProduct.price * quantity,
                        selectedProduct.discountRate
                      )
                    )
                  : currencyFormat(selectedProduct.price * quantity)}
              </Text>
            </Group>
            <Group justifyContent="space-between">
              <NumberInput
                onChange={(value) => setQuantity(value)}
                min="1"
                value={quantity}
              />
              <Button
                margin="0"
                onClick={() => addToCartHandler(selectedProduct)}
                primary
                radius="true"
                block="20rem"
                href="#"
              >
                {addedCart ? "Added to cart" : "Add To Cart"}
              </Button>
              <Group alignItems="center">
                <IconButton size="1.8" className="fal fa-heart" />
                <IconButton size="1.8" className="fal fa-share-alt" />
              </Group>
            </Group>
          </ProductInfo>
        </ProductDetailBody>
        <SubBanner img={["/assets/images/banner-detail.png"]} />
        <Section title="RELATED PRODUCTS" link={true}>
          <Grid col={1} smCol={2} mdCol={3} lgCol={5} gap={20}>
            {bestSellingProducts.slice(0, 5).map((product) => (
              <Card key={selectedProduct.id} product={product} />
            ))}
          </Grid>
        </Section>
      </ProductDetailContainer>
    </Helmet>
  );
};

export default ProductDetail;
