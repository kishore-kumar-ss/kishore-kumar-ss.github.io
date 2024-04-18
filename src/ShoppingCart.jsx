import React, { useState, useEffect } from "react";

export default function ShoppingCart({ items, onClose, onCheckout, removeFromCart }) {
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let total = 0;
        items.forEach(item => {
            total += item.price;
        });
        setTotalPrice(total);
    }, [items]);

    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            {items.length === 0 ? (
                <p>Your shopping cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>
                                <div>
                                    <span>{item.name}</span>
                                    <span>Rs. {item.price}</span>
                                </div>
                                <button onClick={() => removeFromCart(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <p>Total: Rs. {totalPrice}</p>
                </div>
            )}
            <button onClick={onClose}>Close</button>
            <button onClick={onCheckout}>Checkout</button>
        </div>
    );
}
