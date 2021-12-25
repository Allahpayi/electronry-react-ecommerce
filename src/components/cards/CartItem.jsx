import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../redux/actions/cartActions";
import { currencyFormat } from "../../utils/currency-format";
import { discountPrice } from "../../utils/discount-price";
import { Td, Tr } from "../Table";
import IconButton from "../form-elements/IconButton";
import Text from "../tools/Text";
import Group from "../tools/Group";
import NumberInput from "../form-elements/NumberInput";

const Img = styled.img`
  width: 6rem;
  height: 6rem;
  margin-right: 2rem;
  object-fit: contain;
`;


const Delete = styled(IconButton)`
  &:hover {
    color: var(--color-red);
  }
`;
const CartItem = ({ data }) => {
  const dispatch = useDispatch();
  const { name, id, sku, price, discountRate, img } = data.product;
  const removeItemFromCart = (id) => {
    if (window.confirm("Delete the product from the card?")) {
      dispatch(removeFromCart(id));
    }
  };
  return (
    <Tr>
      <Td>
        <Group alignItems="center">
          <Img src={img[0]} />
          <Group direction="column">
            <Text>
              <Link to={`/product/${id}`}>{name}</Link>
            </Text>
            <Text color="var(--color-gray)" fontSize=".9" weight="300">
              {sku}
            </Text>
          </Group>
        </Group>
      </Td>
      <Td>
        <Text color="var(--color-gray)" decoration="line-through" weight="300">
          {currencyFormat(price)}
        </Text>
        <Text color="var(--color-red)" weight="600" fontSize="1.1">
          {currencyFormat(discountPrice(price, discountRate))}
        </Text>
      </Td>
      <Td>
        <NumberInput min='1' value={data.quantity} />
      </Td>
      <Td>
        <Text weight="600" fontSize="1.1">
          {currencyFormat(data.total)}
        </Text>
      </Td>
      <Td>
        <Delete
          onClick={() => removeItemFromCart(id)}
          className="fa fa-trash-alt"
        ></Delete>
      </Td>
    </Tr>
  );
};

export default CartItem;
