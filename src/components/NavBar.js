import React from 'react'
import './navbar.css'


const NavBar = () => {
  return (
    <nav>
        <div className="containers">
            <div className="main-container">
                <div className="logo">
                    <h2>XYZ-Shop</h2>
                </div>
                <div className="search-bar">
                    <input type="search" placeholder="Search for products, brands and more..."/>
                    <a href="#" className="search-icon">
                        <i className="ri-search-line"></i>
                    </a>
                </div>
                <div className="login-cart">
                    <a href="#" className="login-btn">
                        <div className="login">
                            <i className="ri-login-box-line"></i>
                            <span>Login</span>
                        </div>
                    </a>
                    <a href="#" className="cart-btn">
                        <div className="cart">
                            <i className="ri-shopping-cart-2-line"></i>
                            <span>Cart</span>
                        </div>
                    </a>
                </div>
            </div>
            <div className="sub-container">
                <a href="#">
                    <div className="home">Home</div>
                </a>
                <a href="">
                    <div className="feature">Features</div>
                </a>
                <a href="">
                    <div className="new-product">New Products</div>
                </a>
                <a href="">
                    <div className="shop">Shop</div>
                </a>
                <a href="">
                    <div className="Big-sale">Big Sale</div>
                </a>
            </div>
        </div>
    </nav>
  )
}

export default NavBar