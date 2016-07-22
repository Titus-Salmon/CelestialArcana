<!DOCTYPE html>
<html>
  <?php $pageTitle="Titus Salmon | Published Books"; include ('includes/header.php'); ?>
  <body>
    
    <div id="wrapper">
      <section>
        <img src="img/star-cover-web-5.jpg">
        <h3>Celestial Arcana: Precession, Tarot, and the Secret Doctrine</h3>
        <p>In Celestial Arcana - Precession, Tarot, and the Secret Doctrine, the  mysterious and densely encoded symbolism of the Tarot is investigated and  demonstrated to be fundamentally concerned with celestial events and cycles that  are connected to Sirius and the “Secret Doctrine” of Aeonic succession  throughout the course of the Great Year.</p>
        <p>The structural components of the celestial sphere are shown to be keys to  unlocking much of the symbolism behind various esoteric constructs and symbols,  such as the Kabbalistic Tree of Life, Yggdrasil, the Enneagram, the Great Seal,  and the Porta Alchemica. These keys are then applied to the Major Arcana in a  multifaceted approach that considers astromythology, equinoctial precession, and  ancient modes of chronometry in the examination of trump attributions.</p>
        <p>Previous systems are discussed, drawing from various historical sources, such  as Waite, Crowley, Thierens, Levi, and de Gebelin. The tradition of ascribing a  Hebraic letter to each of the 22 trumps is also addressed, and a new system is  proposed. This system interprets the threefold categorization of the Hebraic  alphabet into the “3 mothers”, “7 doubles”, and “12 simples”, according to the  celestial mechanism of precession.  	 The work of Gerald Massey is drawn from throughout the book. Massey was  considered to be a self-initiate into the “Secret Doctrine” by H. P.  Blavatsky,  and Crowley listed him as one of the Chiefs of the "Argentium Astrum".  Much  that is obscure in Crowley’s Tarot doctrine is clarified via reference to  Massey’s extensive writings on the astromythology of the ancient Egyptians.</p>
        <p>The Minor Arcana and its relationship to the Major Arcana is discussed as well,  and it is proposed that the two Arcana can be used as an astrological notation  system in which any kind of chart (i.e., natal, progressed, etc.)  may be  constructed by utilizing specific combinations of the cards. It is postulated  that much of the secrecy and taboo surrounding the Tarot originated from such a  use during the Medieval Ages, when prognosticative astrology was forbidden under  threat of Inquisition. Anyone with  an interest in tarot symbolism, astrology, alchemy, astromythology, Egyptology,  and the concept of Aeonic succession is sure to find valuable information  contained herein.</p>
        
      </section>
    <?php include ('includes/footer.php'); ?>  
    </div>
  </body>
    
    <form action="" method="POST">
  <script
    src="https://checkout.stripe.com/checkout.js" class="stripe-button"
    data-key="pk_test_Sdta6uLGfK3oCSJeKaxZIuay"
    data-amount="3300"
    data-name="Demo Site"
    data-description="Widget"
    data-image="/img/documentation/checkout/marketplace.png"
    data-locale="auto"
    data-zip-code="true">
  </script>
</form>

    <?php

require 'includes/vendor/autoload.php';
// Set your secret key: remember to change this to your live secret key in production
// See your keys here https://dashboard.stripe.com/account/apikeys
\Stripe\Stripe::setApiKey("sk_test_sjb9aTfvCz92mHcJiSYk80xJ");

// Get the credit card details submitted by the form
$token = $_POST['stripeToken'];

// Create the charge on Stripe's servers - this will charge the user's card
try {
  $charge = \Stripe\Charge::create(array(
    "amount" => 3300, // amount in cents, again
    "currency" => "usd",
    "source" => $token,
    "description" => "Example charge"
    ));
} catch(\Stripe\Error\Card $e) {
  // The card has been declined
}
    ?>

</html>
