import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import ProductListing from "./Components/ProductListing/ProductListing";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import ProductDetalis from "./Components/Cart/productPage/productDetalis";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:productId" element={<ProductDetalis />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
