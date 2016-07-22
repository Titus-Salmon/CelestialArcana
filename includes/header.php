

<head lang="en">
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="CSS/normalize.css">
    <link rel="stylesheet" href="CSS/main.css">
    <link rel="stylesheet" href="CSS/responsive.css">
    <meta name="viewport" content="width=device-width, initial scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.4/angular.min.js"></script>
  
    
    
    <title><? echo $pageTitle; ?></title>
    
    
</head>


<header>
  <a href="index.php" id="logo">
    <h1>Titus Salmon</h1>
    <h2>Artist and Author</h2>
  </a>
  <nav>
    <ul>
      <li><a href="portfolio.php" <?=echoSelectedClassIfRequestMatches("portfolio")?>>Portfolio</a></li>
      <li><a href="PublishedBooks.php" <?=echoSelectedClassIfRequestMatches("PublishedBooks")?>>Published Books</a></li>
      <li><a href="about.php" <?=echoSelectedClassIfRequestMatches("about")?>>About</a></li>
      <li><a href="suggest.php" <?=echoSelectedClassIfRequestMatches("suggest")?>>Contact</a></li>
      <li><a href="clicktable4.php" <?=echoSelectedClassIfRequestMatches("clicktable4")?>>Tarot Reading</a></li>
    </ul>
      
      
    <?php
        function echoSelectedClassIfRequestMatches($requestUri)
        {
        $current_file_name = basename($_SERVER['REQUEST_URI'], ".php");

        if ($current_file_name == $requestUri)
            echo 'class="selected"';
            
        
            
        }
             
        
             
        ?>
  </nav>
</header>
