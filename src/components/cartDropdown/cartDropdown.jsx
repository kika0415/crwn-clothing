import React from 'react';

import CustomButton from '../customButton/customButtonComponent';

import './cartDropdown.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items'></div>
    <CustomButton>Go to Checkout</CustomButton>
  </div>
);

export default CartDropdown;
