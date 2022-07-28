import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import ProductListingCard from "../ProductLisitingCard/ProductLisitngCard";
import { fetchProducts } from "../Store/Actions/ProductListActions";
import {
  getProdcuctError,
  getProdcuctList,
  getProdcuctLoading,
} from "../Store/Selectors/productSelector";
import "./ProductListing.css";

const ProductListing = () => {
  const dispatch = useDispatch();
  const productsData= useSelector(getProdcuctList);
  const productLoading = useSelector(getProdcuctLoading);
  const productError = useSelector(getProdcuctError);
  console.log(productsData);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <div className="productPage">
        <div className="cards">
          {productLoading === "Success" && productsData ? (
            productsData
              .sort((a, b) => a.order - b.order)
              .map((item) => {
                return <ProductListingCard category={item} key={item.id} />;
              })
          ) : (
            <p>{"Something went wrong!!! Please refresh the Page"}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductListing;
