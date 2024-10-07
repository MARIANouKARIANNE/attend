import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Header from './components/Header';
import './styles/Content.css'; 
function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="content"> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;