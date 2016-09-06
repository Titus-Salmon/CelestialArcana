


<?php $pageTitle="Celestial Arcana";

    include ('includes/header.php');?>

<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
    <script type="text/javascript" src="turn.js"></script>
</head>



<body>
    <div id="wrapper">

     

    <IMG class="displayed" src="img/tables-1.jpg" alt="book cover">

        <br>
        <h2 class="h2center">Celestial Arcana: Precession, Tarot, and the Secret Doctrine</h2>
        
        
        <h3 class="h3center">(Click on highlighted terms for more information.</h3>
        <h3 class="h3center">Terms highlighted more than once redirect to different pages.)</h3>
        <br>



        <p>Previous systems are discussed, drawing from various historical sources, such as <a href="https://en.wikipedia.org/wiki/A._E._Waite" target="_blank">Arthur Waite</a>, <a href="https://en.wikipedia.org/wiki/Aleister_Crowley" target="_blank">Aleister Crowley</a>, <a href="http://sacred-texts.com/tarot/gbt/" target="_blank">A. E. Thierens</a>, <a href="https://en.wikipedia.org/wiki/Eliphas_Levi" target="_blank">Eliphas Levi</a>, and <a href="https://en.wikipedia.org/wiki/Antoine_Court_de_G%C3%A9belin" target="_blank">Antoine Court de Gebelin</a>. The <a href="http://newsletter.tarotstudies.org/2009/04/tarot-trumps-and-hebrew-letters/" target="_blank">tradition of ascribing a Hebraic letter to each of the 22 trumps</a> is also addressed, and a new system is proposed. This system interprets the threefold categorization of the <a href="https://en.wikipedia.org/wiki/Hebrew_alphabet" target="_blank">Hebraic alphabet</a> into the <a href="https://en.wikipedia.org/wiki/Sefer_Yetzirah#Structure" target="_blank">“3 mothers”, “7 doubles”, and “12 simples”</a>, according to the celestial mechanism of precession.</p> 


        
        <div class="wrapper2">
            <div class="btn-group" role="group" aria-label="...">
            <a href="index4.php" class="btn btn-default" <?=echoSelectedClassIfRequestMatches("index4")?>
              <button type="button" class="btn btn-default">Previous</button>
            </a>
            <a href="index6.php" class="btn btn-default" <?=echoSelectedClassIfRequestMatches("index6")?>
              <button type="button" class="btn btn-default">Next</button>
            </a>
            </div>
        </div>
        
        

    </div>
</body>
<?php include ('includes/footer.php'); ?>



