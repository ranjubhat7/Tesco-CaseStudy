import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import ProductListing from "./Components/ProductListing/ProductListing";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ProductDetalis from "./Components/Cart/productPage/productDetalis";
import Protected from "./Components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/products"
            element={
              <Protected>
                <ProductListing />
              </Protected>
            }
          />
          <Route
            path="/products/:productId"
            element={
              <Protected>
                <ProductDetalis />
              </Protected>
            }
          />
          <Route path="*" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
