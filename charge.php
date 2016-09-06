
<?php
  require_once('./config.php');
  $token  = $_POST['stripeToken'];
  $customer = \Stripe\Customer::create(array(
      'email' => 'customer@example.com',
      'card'  => $token
  ));
  $charge = \Stripe\Charge::create(array(
      'customer' => $customer->id,
      'amount'   => 3300,
      'currency' => 'usd'
  ));
  echo '<h2 class="h2center">Successfully charged $33!</h2>';
?>