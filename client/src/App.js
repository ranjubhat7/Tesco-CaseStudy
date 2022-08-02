import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
const Login = React.lazy(() => import("./Components/Login/Login"));
const ProductListing = React.lazy(() =>
  import("./Components/ProductListing/ProductListing")
);
const Header = React.lazy(() => import("./Components/Header/Header"));
const Footer = React.lazy(() => import("./Components/Footer/Footer"));
const ProductDetails = React.lazy(() =>
  import("./Components/Cart/productPage/productDetalis")
);
const Protected = React.lazy(() => import("./Components/ProtectedRoute"));
function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
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
                  <ProductDetails />
                </Protected>
              }
            />
            <Route path="*" element={<Login />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
