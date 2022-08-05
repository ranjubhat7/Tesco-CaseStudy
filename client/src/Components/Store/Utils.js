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
  name = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
};

export const expireAllCookies = (name) => {
  var expires = new Date(0).toUTCString();
  let paths = ["/", "/products"];
  document.cookie = name + "=; expires=" + expires;
  for (let i = 0, l = paths.length; i < l; i++) {
    document.cookie = name + "=; path=" + paths[i] + "; expires=" + expires;
  }
};
