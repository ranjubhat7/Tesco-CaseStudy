import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../Banner/Banner";
import ProductListingCard from "../ProductLisitingCard/ProductLisitngCard";
import { fetchProducts } from "../Store/Actions/ProductListActions";
import { getProdcuctList } from "../Store/Selectors/productSelector";
import { getCookie } from "../Store/Utils";
import "./ProductListing.css";

const ProductListing = () => {
  const dispatch = useDispatch();
  const { productList, productLoading, productError } =
    useSelector(getProdcuctList);
  const cartItems = useSelector((state) => state.CartReducer.cartItems);

  useEffect(() => {
    if (getCookie("token") && !cartItems.length) dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    if (getCookie("token") && productError?.response?.status === 401)
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  }, [productError]);

  return (
    <>
      <Banner />
      <div className="productPage">
        {productLoading === "Failed" &&
          (productError?.response?.status === 401 ? (
            <p className="centerAlign">Please signout and signin back!!!</p>
          ) : (
            <p className="centerAlign">
              {"Something went wrong!!! Please refresh the Page"}
            </p>
          ))}
        <div className="cards">
          {productLoading === "Success" &&
            productList &&
            productList
              .sort((a, b) => a.order - b.order)
              .map((item) => {
                return <ProductListingCard category={item} key={item.id} />;
              })}
        </div>
      </div>
    </>
  );
};

export default ProductListing;
