import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KayO1GOQLfuM294We9LLBuwpbyJKfRVyoga5aJiNFc8J6aWtJ2p3mLFjgoHawvPXMSMgnwAL9cA6R55Vs92FSs100OSqMphpg';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

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
            token={onToken}
            stripeKey={publishableKey}
         />
    );
};

export default StripeCheckoutButton;