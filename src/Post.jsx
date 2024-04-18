import { useState } from "react";
import ShoppingCart from "./ShoppingCart";

export default function Post({ name, price, description, starRating, imageURL, onAddToCart }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`post ${isOpen ? 'open' : ''}`}>
            <div className="post-header">
                <h2>{name}</h2>
                <img src={imageURL} alt="post-image" />
                <button onClick={toggleOpen} className="close-btn">{isOpen ? 'Close' : 'Open'}</button>
            </div>
            {isOpen && (
                <div className="post-content">
                    <p><strong>Price:</strong> Rs. {price}</p>
                    <p><strong>Description:</strong> {description}</p>
                    <p><strong>Star Rating:</strong> {starRating} stars</p>
                    <button onClick={onAddToCart}>Add to Cart</button> {/* Call onAddToCart function */}
                </div>
            )}
        </div>
    );
}
