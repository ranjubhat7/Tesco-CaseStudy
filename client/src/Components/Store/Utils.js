export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const getUpdatedProductList = (type, productId, productList) => {
  const selectedProductIndex = productList.findIndex(
    (item) => item.id === productId
  );

  if (type === "addToCart") {
    productList[selectedProductIndex] = {
      ...productList[selectedProductIndex],
      stock: Number(productList[selectedProductIndex].stock) - 1,
    };
  } else {
    productList[selectedProductIndex] = {
      ...productList[selectedProductIndex],
      stock: Number(productList[selectedProductIndex].stock) + 1,
    };
  }
  console.log(productList)
  return productList;
};
