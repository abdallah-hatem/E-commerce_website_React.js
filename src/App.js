import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Buttons from './components/Buttons';
import { React, useEffect, useState } from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';

import { saveCart } from './redux/shopping/productReducer';


function App() {

  const [category, setCategory] = useState("all")
  const [darkMode, setDarkMode] = useState(false)

  const styles = {
    backgroundColor: darkMode ? "#121212" : "",
    color: darkMode ? "white" : ""
  }

  function toggleDarkMode() {
    setDarkMode(prevState => !prevState)
  }

  function renderCategory(e) {
    setCategory(e.target.innerHTML)

  }


  return (
    <Router>

      <Navbar
        toggleDarkMode={toggleDarkMode}
        styles={styles}
      />

      <Routes>
        <Route path='/' element={
          <div>

            <Home />

            <Buttons
              renderCategory={renderCategory}
            />

            <Products
              category={category}
              styles={styles}
            />

          </div>

        } />


        <Route path='/cart' element={
          <Cart
            styles={styles}
          />
        } />

        <Route path="*" element={
          <h1 style={{ textAlign: "center" }}>404 PAGE NOT FOUND</h1>
        } />

        <Route path='/product' element={<ProductDetails />} />

      </Routes>

      {/* <Footer /> */}
    </Router>
  );
}

export default App;
