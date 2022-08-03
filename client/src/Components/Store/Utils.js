import productData from "../../Data/productList.json";

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

export const getUpdatedProductList = (
  type,
  productId,
  productList = productData
) => {
  const selectedProductIndex = productList.findIndex(
    (item) => item.id === productId
  );

  if (type === "addToCart") {
    productList[selectedProductIndex] = {
      ...productList[selectedProductIndex],
      stock: Number(productList[selectedProductIndex]?.stock) - 1,
    };
  } else {
    productList[selectedProductIndex] = {
      ...productList[selectedProductIndex],
      stock: Number(productList[selectedProductIndex].stock) + 1,
    };
  }
  return productList;
};

export const getCookie = (name) => {
  // Add the = sign
  name = name + "=";

  // Get the decoded cookie
  const decodedCookie = decodeURIComponent(document.cookie);

  // Get all cookies, split on ; sign
  const cookies = decodedCookie.split(";");

  // Loop over the cookies
  for (let i = 0; i < cookies.length; i++) {
    // Define the single cookie, and remove whitespace
    const cookie = cookies[i].trim();

    // If this cookie has the name of what we are searching
    if (cookie.indexOf(name) == 0) {
      // Return everything after the cookies name
      return cookie.substring(name.length, cookie.length);
    }
  }
};
