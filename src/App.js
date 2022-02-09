import { Route, Routes, Navigate } from "react-router-dom";
import Product from "./pages/product";
import Welcome from "./pages/welcome";
import Header from "./components/MainHeader";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" exact element={<Navigate replace to="/welcome" />} />

          {/* </Route> */}
          <Route path="/welcome" exact element={<Welcome />}></Route>
          <Route path="/products" element={<Product />} />
          <Route path="/products/:product_id" element={<ProductDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
