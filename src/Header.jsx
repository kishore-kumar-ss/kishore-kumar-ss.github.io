import React from "react";
import siteLogoImage from '../images/siteLogo.jpg';
import shoppingCartImage from '../images/shoppingCart.jpg';

export default function Header({ onCartClick, onJoinUsClick, onaboutclick }) {
    const handleAddToCart = () => {
        onCartClick();
        window.alert("Product added to cart successfully!");
    };

    return (
        <div className="header">
            <div className="site-name">
                <img src={siteLogoImage} alt="site-logo" />
                <h1>VIThub</h1>
            </div>
            <div className="search">
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search..."
                    //onChange
                    />
                </div>
                <button className="search-button">
                    Search
                </button>
            </div>
            <div className="misc-buttons">
                <button className="join-us" onClick={onJoinUsClick}>
                    <p>Join us</p>
                </button>

                <button className="join-us" onClick={onaboutclick}>
                    <p> about us</p>
                </button>
                <button className="shopping-cart" onClick={handleAddToCart}>
                    <img src={shoppingCartImage} alt="shopping-cart" />
                </button>
            </div>
        </div>
    )
}
