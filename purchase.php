

<?php  include ('includes/header.php'); ?>



<body>
<h1 class="h1center">SECURE CHECKOUT</h1>
<IMG class="displayed" src="img/solid.png" alt="powered by Stripe">
<IMG class="displayed" src="img/star-cover-no-words-web-5.jpg" alt="book cover">

      


<?php require_once('./config.php'); ?>

<p></p>
<p></p>
<form class ="formcenter" action="charge.php" method="post">
  <script src="https://checkout.stripe.com/checkout.js" class="stripe-button"
          data-key="<?php echo $stripe['publishable_key']; ?>"
          data-amount="1100" data-description="Celestial Arcana - paperback"></script>
</form>

    
    
  </body>
    
    
    
<?php include ('includes/footer.php'); ?>


