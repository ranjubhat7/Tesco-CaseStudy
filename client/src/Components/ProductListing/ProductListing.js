import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import ProductListingCard from "../ProductLisitingCard/ProductLisitngCard";
import "./ProductListing.css";

const ProductListing = () => {
  const [productsData, setproductsData] = useState(null);
  useEffect(() => {
    const data = async () => {
      const response = await fetch("http://localhost:8080/products");
      const responseJson = await response.json();
      setproductsData(responseJson);
    };
    data();
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <div className="productPage">
        <div className="cards">
          {productsData &&
            productsData
              .sort((a, b) => a.order - b.order)
              .map((item) => {
                return <ProductListingCard category={item} />;
              })}
        </div>
      </div>
    </>
  );
};

export default ProductListing;
