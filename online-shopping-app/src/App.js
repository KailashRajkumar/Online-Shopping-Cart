import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Routes, Route } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import Thankyou from './component/Thankyou';
import About from './component/About';
import Footer from './component/Footer';
import Contact from './component/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
