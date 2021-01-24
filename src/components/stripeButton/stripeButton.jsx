import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51ID4bnElnIKwP4WdPrUDOJSn5HsqXPmD02l7vecqzICBmwcKgnreuTR6Hp37Z5IfGidqC9oLJ6gmUpB81zPmZMRC00kRNZtruD';
  const onTokon = (token) => {
    console.log(token);
    alert('Payment successful');
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onTokon}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
