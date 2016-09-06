<form action="" method="POST">
  <script
    src="https://checkout.stripe.com/checkout.js" class="stripe-button"
    data-key="pk_test_Sdta6uLGfK3oCSJeKaxZIuay"
    data-amount="33"
    data-name="Demo Site"
    data-description="Widget"
    data-image="/img/documentation/checkout/marketplace.png"
    data-locale="auto"
    data-zip-code="true">
  </script>
</form>

<?php

require 'vendor/autoload.php';
// Set your secret key: remember to change this to your live secret key in production
// See your keys here https://dashboard.stripe.com/account/apikeys
\Stripe\Stripe::setApiKey("sk_test_sjb9aTfvCz92mHcJiSYk80xJ");

// Get the credit card details submitted by the form
$token = $_POST['stripeToken'];

// Create the charge on Stripe's servers - this will charge the user's card
try {
  $charge = \Stripe\Charge::create(array(
    "amount" => 33, // amount in cents, again
    "currency" => "usd",
    "source" => $token,
    "description" => "Example charge"
    ));
} catch(\Stripe\Error\Card $e) {
  // The card has been declined
}