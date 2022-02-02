import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./routes/Layout/Layout";
import Home from "./routes/Home/Home";
import Products from "./routes/Products/Products";
import ProductDetails from "./routes/ProductDetails/ProductDetails";
import Cart from "./routes/Cart/Cart";
import NotFound from "./routes/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import useStore from "./store/store";
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./routes/About/About";

function App() {
  const theme = useStore((state) => state.theme);

  return (
    <div className="App" data-theme={theme}>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
