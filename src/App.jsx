import React, { useState } from 'react';
import Header from './Header';
import Post from './Post';
import SignUpForm from './SignUpForm';
import ShoppingCart from './ShoppingCart';
import AboutUs from './AboutUs';
import './App.css';

import cycleImage from '../images/cycle.jpg';

function App() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isaboutopen, setabout] = useState(false);

  const items = [
    { name: 'Kettle', price: 800, imageURL: '../images/kettle.jpg', starRating: 4.3, description: 'safe to use. please keep children away.' },
    { name: 'Umbrella', price: 600, imageURL: '../images/umbrella.jpg', starRating: 4.6, description: 'good quality!👌' },
    { name: 'Cycle', price: 7000, imageURL: cycleImage, starRating: 4, description: 'Good quality with 10% off' },
    { name: 'Mattress', price: 4500, imageURL: '../images/mattress.jpg', starRating: 3, description: 'Sleepwell mattress, for good dreams 😴' },
    { name: 'Mouse pad', price: 200, imageURL: '../images/mousePad.jpg', starRating: 4.3, description: 'Redgear pad used for 2 years.' },
    { name: 'Extender', price: 350, imageURL: '../images/extender.jpg', starRating: 3.6, description: '1 year warrenty' },
    { name: 'Iron', price: 1200, imageURL: '../images/iron.jpg', starRating: 2.4, description: 'Works great with 50% off' },
    { name: 'Calculator', price: 750, imageURL: '../images/calculator.jpg', starRating: 4.9, description: 'Casio scientific calculator' },
    { name: 'Charger', price: 900, imageURL: '../images/charger.jpg', starRating: 5, description: 'USB-c type 65 watt charger samsung' },
    { name: 'Shoes', price: 80000, imageURL: '../images/shoes.jpg', starRating: 5, description: 'Adidas air size 11 ' },
    { name: 'Bag', price: 2300, imageURL: '../images/bag.jpg', starRating: 4.6, description: 'Wildcraft bag comes with raincover and charging ports' },
    { name: 'Bottle', price: 650, imageURL: '../images/bottle.jpg', starRating: 3.9, description: 'Stainless steel 1L water bottle' }
  ];

  const toggleSignUp = () => {
    setIsSignUpOpen(!isSignUpOpen);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  const openaboutus = () => {
    setabout(!isaboutopen);
  };



  return (
    <>
      <Header onCartClick={() => setIsCartOpen(true)} onJoinUsClick={toggleSignUp} onaboutclick={openaboutus}/>
      {isaboutopen && <AboutUs onClose={() => setabout(false)} />}
      {isSignUpOpen && <SignUpForm onClose={() => setIsSignUpOpen(false)} />}
      <h1 className='top-products'>Top products...</h1>
      <div className="posts-container">
        {items.map((item, index) => (
          <Post
            key={index}
            name={item.name}
            price={item.price}
            starRating={item.starRating}
            description={item.description}
            imageURL={item.imageURL}
            onAddToCart={() => addToCart(item)} // Pass addToCart function as prop
          />
        ))}
      </div>
      {isSignUpOpen && <SignUpForm onClose={() => setIsSignUpOpen(false)} />}
      {isCartOpen && (
        <ShoppingCart
          items={cartItems}
          onClose={() => setIsCartOpen(false)}
          onCheckout={() => { /* Handle checkout logic */ }}
          removeFromCart={(index) => {
            const updatedCart = [...cartItems];
            updatedCart.splice(index, 1);
            setCartItems(updatedCart);
          }}
        />
      )}
    </>
  );
}

export default App;
