import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AuthProvider } from './AuthContext.js';
import Login from "./components/login/login";
import Register from "./components/register/register";
import Head from "./components/Header/Header";
import Menu from "./components/Menu/menu";
import Footer from "./components/Footer/footer";
import Logout from "./components/Header/headLogout";
import Home from "./components/Home/Home";
import StoreContextProvider from "./components/Storecontext/StoreContext";
import Cart from "./components/Cart/Cart";
import Order from "./components/Order/order";
import { ToastContainer } from 'react-toastify';
import Verify from "./components/verify/verify";
import MyOrder from "./components/myOrder/myOrder";


function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <StoreContextProvider>
          <Routes>
            <Route path="/" element={<Head />} />
            <Route path="/headLogin" element={<Home />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/myOrder" element={<MyOrder />} />
          </Routes>
          <Footer />
        </StoreContextProvider>
      </BrowserRouter>
    </>

  );
}

export default App;
