import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import ProductListing from "./Components/ProductListing/ProductListing";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Protected from "./Components/ProtectedRoute";
import { useSelector } from "react-redux";
import { isLoggedIn } from "./Components/Store/Selectors/userSelector";
import NotFound from "./Components/NotFound/NotFound";
function App() {
  const isLogged = useSelector(isLoggedIn);
  return (
    <div className="App">
      <Header />

      <Router>
        <Routes>
          <Route
            path="/"
            element={
              // <Protected isLoggedIn={isLogged} reDirectPath={"/"}>
              <Login />
              // </Protected>
            }
          />
          <Route
            path="/products"
            element={
              <Protected
                isLoggedIn={isLogged}
                reDirectPath={isLogged ? "/products" : "/"}
              >
                <ProductListing />
              </Protected>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
