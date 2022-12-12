import './App.css';
import NavBar from './components/Navbar'
import Home from './components/Home';
import {Route, Routes} from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';

function App() {
  return (
    <>
      <NavBar></NavBar>
      
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/products" element={<Products></Products>}></Route>
          <Route exact path="/products/:id" element={<Product></Product>}></Route>
          <Route exact path="/cart" element={<Cart></Cart>}></Route>
          <Route exact path="/login" element={<Login></Login>}></Route>
          <Route exact path="/register" element={<Register></Register>}></Route>
          <Route exact path="/about" element={<About></About>}></Route>




        </Routes>
        
      
    </>
  );
}

export default App;
