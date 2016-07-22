<?php

$pageTitle="Titus Salmon | Tarot Reading"; include ('includes/header.php');


//session_start();
//        if (!isset($_SESSION['numbers'])) {
//            $_SESSION['numbers']="*"; //---create the session variable
//        }
//
//        function get_number() {
//            $i = 0;
//            do { 
//                $num=rand(0,21); //---generate a random number
//                if (!strstr($_SESSION['numbers'],"*".$num."*")) { //---check if the number has already been used
//                    $_SESSION['numbers']=$_SESSION['numbers'] . $i . "*"; //---add the number to the session variable to avoid repeating
//                    if (substr_count($_SESSION['numbers'],"*")>=22) { //---resets the session variable when all 20 number have been used
//                        $_SESSION['numbers']="*";
//                    }
//                    $i=$num; //---ends the while loop to return the value
//                 }  
//            } while ($i==0);
//            return $i;
//        }

include "clicktable-button4.php";

try
    {
        $dsn = 'mysql:host=localhost;dbname=Tarot1';
        $username = 'root';
        $password = '%ZR.?#c?l3YR';
        $options = array(
            PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
        ); 

        $dbMajArc = new PDO($dsn, $username, $password, $options);

        $dbMajArc->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    }
catch (Exception $e)
    {
        echo "Unable to connect";
        echo $e->getMessage();
        exit;
    }
try
    {
        
        

//        $randnum1 = rand(0,21);
//        echo $randnum1;
        
    
//        $results = $dbMajArc->query("SELECT TrumpNumber, TrumpName FROM majorarcana2 ORDER BY RAND() LIMIT 1");
//        $MajArcDeckArray = $results->fetchAll();
//        var_dump ($MajArcDeckArray);
//        $dbMajArc->query("UPDATE majorarcana2 SET TrumpNumber=NULL WHERE TrumpNumber=$randnum1");
    
        
        $randnum1 = rand(0,21);
        echo $randnum1;
        
    
//    $results1 = $dbMajArc->query("INSERT INTO majorarcana3 SELECT * FROM majorarcana2 WHERE TrumpNumber= $randnum1; SELECT * from majorarcana2 WHERE TrumpNumber= $randnum1");   
    
//    $results1 = $dbMajArc->query("INSERT INTO majorarcana3 SELECT * FROM majorarcana2 WHERE TrumpNumber= $randnum1; DELETE FROM majorarcana2 WHERE TrumpNumber= $randnum1; SELECT TrumpName FROM majorarcana3");
    
    $results1 = $dbMajArc->query("INSERT INTO majorarcana3 SELECT * FROM majorarcana2 WHERE TrumpNumber= $randnum1");
        
    $results2 = $dbMajArc->query("DELETE FROM majorarcana2 WHERE TrumpNumber= $randnum1");
    
    $results3 = $dbMajArc->query("SELECT TrumpName FROM majorarcana3");
     
    
    
    
//   $results1 = $dbMajArc->query("SELECT TrumpName FROM majorarcana3; INSERT INTO majorarcana3 SELECT * FROM majorarcana2 WHERE TrumpNumber= $randnum1; DELETE FROM majorarcana2 WHERE TrumpNumber= $randnum1");
    
    
//    $results2 = $dbMajArc->query("SELECT * from majorarcana3");
   
//    $MajArcDeckArray1 = $results1->fetchAll();
//    print_r ($MajArcDeckArray1);
    
//    $MajArcDeckArray2 = $results2->fetchAll();
//    print_r ($MajArcDeckArray2);
    
    $MajArcDeckArray3 = $results3->fetchAll();
    print_r ($MajArcDeckArray3);
    
//    $MajArcDeckArray2 = $results2->fetchAll();
//    var_dump ($MajArcDeckArray2);
    
    
//        $results2 = $dbMajArc->query("DELETE FROM majorarcana2 WHERE TrumpNumber= $randnum1");
//        $MajArcDeckArray2 = $results2->fetchAll();
//        var_dump ($MajArcDeckArray2);
//        $dbMajArc->query("UPDATE majorarcana2 SET TrumpNumber=NULL WHERE TrumpNumber=$randnum1");
        
        
    
//        $randnum2 = rand(0,21);
//        if ($randnum2 != $randnum1) echo $randnum2;
//        
//    
//        $results = $dbMajArc->query("SELECT TrumpNumber, TrumpName FROM majorarcana WHERE TrumpNumber = $randnum2");
//        $MajArcDeckArray = $results->fetchAll();
//        var_dump ($MajArcDeckArray);
//    
//        $randnum3 = rand(0,21);
//        if ($randnum3 != $randnum1 and $randnum3 != $randnum2) echo $randnum3;
//        
//    
//        $results = $dbMajArc->query("SELECT TrumpNumber, TrumpName FROM majorarcana WHERE TrumpNumber = $randnum3");
//        $MajArcDeckArray = $results->fetchAll();
//        var_dump ($MajArcDeckArray);
    
        
    
//        $results = $dbMajArc->query("SELECT FLOOR(RAND() * 22) AS TrumpNumber FROM majorarcana LIMIT 1");
//        $MajArcDeckArray = $results->fetchAll();
//        var_dump ($MajArcDeckArray);
    
    
//        $results = $dbMajArc->query("SELECT FLOOR(RAND() * COUNT(*)) AS `offset` FROM `majorarcana`");
//        $MajArcDeckArray = $results->fetchAll();
//        var_dump ($MajArcDeckArray);
    
//    SELECT FLOOR(RAND() * 99999) AS random_num
//    FROM numbers_mst 
//    WHERE "random_num" NOT IN (SELECT my_number FROM numbers_mst)
//    LIMIT 1
//        $offset_row = mysqli_fetch_object($results);
//        $offset = $offset_row->offset;
//        $CardDraw = mysqli_query( "$CardDraw, SELECT * FROM `majorarcana` LIMIT $offset, 1" );
//        var_dump ($CardDraw);
        //$results = $dbMajArc->query("SELECT TrumpNumber, TrumpName FROM majorarcana ORDER BY RAND() LIMIT 1");
        //echo "results retrieved";
    }
catch (Exception $e)
    {
        echo "Unable to retrieve results";
        echo $e;
        exit;
    }
//$MajArcDeckArray = $results->fetchAll();
//var_dump ($MajArcDeckArray);

//$offset_result = mysql_query( " SELECT FLOOR(RAND() * COUNT(*)) AS `offset` FROM `table` ");
//$offset_row = mysql_fetch_object( $offset_result );
//$offset = $offset_row->offset;
//$result = mysql_query( " SELECT * FROM `table` LIMIT $offset, 1 " );



//if (!$_SESSION['ids']) {
//    $_SESSION['ids'] = $db->getAllQuestionIdsFromTheDatabase();
//                    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//                    // Leaving this up to you.
//
//    shuffle($_SESSION['ids']);
//
//    // $_SESSION['ids'] should now look like array(42, 12, 75, ...);
//}
//
//$question = $db->getQuestionById(array_shift($_SESSION['ids']));


include ('includes/footer.php');

