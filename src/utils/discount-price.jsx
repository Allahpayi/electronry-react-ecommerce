export const discountPrice = (price, rate) => {
  let discountPrice = (price * (100 - rate)) / 100;
  return discountPrice;
};
