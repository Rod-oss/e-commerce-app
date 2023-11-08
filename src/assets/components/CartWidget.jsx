import React from 'react'
import cart from '../images/cart.svg'
import { Link } from "react-router-dom"
const CartWidget = () => {
    
  
    const cartItemsCount = 0; 
  
    const changeDark = (e) => {
      e.target.src = cart;
    };
  
    return (
      <Link to="/bag" className="flex cursor-pointer relative">
        <img
          src={cart}
          alt="cart"
          onMouseLeave={changeDark}
        />
        {cartItemsCount > 0 && (
          <div className={`rounded-[50%] absolute text-center text-[10px] h-4 w-4 left-2 top-3 flex items-center justify-center font-semibold bg-dark-gray-text text-white`}>
            {cartItemsCount > 9 ? "9+" : cartItemsCount}
          </div>
        )}
      </Link>
    );
  };
  
  export default CartWidget;

