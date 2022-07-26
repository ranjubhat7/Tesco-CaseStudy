import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import ProductListing from "./Components/ProductListing/ProductListing";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<ProductListing/>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
