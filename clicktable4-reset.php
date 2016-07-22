<?php
include ('includes/header.php');

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
    $dbMajArc->query("DELETE FROM majorarcana2");
    $dbMajArc->query("DELETE FROM majorarcana3");
        
    $dbMajArc->query("INSERT INTO majorarcana2 (TrumpNumber,TrumpName)
                    VALUES ('0','The Fool')");
    $dbMajArc->query("INSERT INTO majorarcana2 (TrumpNumber,TrumpName)
                    VALUES ('1','The Magician')");
    $dbMajArc->query("INSERT INTO majorarcana2 (TrumpNumber,TrumpName)
                    VALUES ('2','The High Priestess')");
    $dbMajArc->query("INSERT INTO majorarcana2 (TrumpNumber,TrumpName)
                    VALUES ('3','The Empress')");
    $dbMajArc->query("INSERT INTO majorarcana2 (TrumpNumber,TrumpName)
                    VALUES ('4','The Emperor')");
    $dbMajArc->query("INSERT INTO majorarcana2 (TrumpNumber,TrumpName)
                    VALUES ('5','The Hierophant')");
    $dbMajArc->query("INSERT INTO majorarcana2 (TrumpNumber,TrumpName)
                    VALUES ('6','The Lovers')");
    $dbMajArc->query("INSERT INTO majorarcana2 (TrumpNumber,TrumpName)
                    VALUES ('7','The Chariot')");
    $dbMajArc->query("INSERT INTO majorarcana2 (TrumpNumber,TrumpName)
                    VALUES ('8','Strength')");
    $dbMajArc->query("INSERT INTO majorarcana2 (TrumpNumber,TrumpName)
                    VALUES ('9','The Hermit')");
    $dbMajArc->query("INSERT INTO majorarcana2 (TrumpNumber,TrumpName)
                    VALUES ('10','Fortune')");
    $dbMajArc->query("INSERT INTO majorarcana2 (TrumpNumber,TrumpName)
                    VALUES ('11','Justice')");
    $dbMajArc->query("INSERT INTO majorarcana2 (TrumpNumber,TrumpName)
                    VALUES ('12','The Hanged Man')");
    $dbMajArc->query("INSERT INTO majorarcana2 (TrumpNumber,TrumpName)
                    VALUES ('13','Death')");
    $dbMajArc->query("INSERT INTO majorarcana2 (TrumpNumber,TrumpName)
                    VALUES ('14','Temperance')");
    $dbMajArc->query("INSERT INTO majorarcana2 (TrumpNumber,TrumpName)
                    VALUES ('15','The Devil')");
    $dbMajArc->query("INSERT INTO majorarcana2 (TrumpNumber,TrumpName)
                    VALUES ('16','The Tower')");
    $dbMajArc->query("INSERT INTO majorarcana2 (TrumpNumber,TrumpName)
                    VALUES ('17','The Star')");
    $dbMajArc->query("INSERT INTO majorarcana2 (TrumpNumber,TrumpName)
                    VALUES ('18','The Moon')");
    $dbMajArc->query("INSERT INTO majorarcana2 (TrumpNumber,TrumpName)
                    VALUES ('19','The Sun')");
    $dbMajArc->query("INSERT INTO majorarcana2 (TrumpNumber,TrumpName)
                    VALUES ('20','Judgment')");
    $dbMajArc->query("INSERT INTO majorarcana2 (TrumpNumber,TrumpName)
                    VALUES ('21','The World')");
    
//        $dbMajArc->query("UPDATE majorarcana2 SET TrumpNumber=0 WHERE TrumpName='The Fool'");
//        $dbMajArc->query("UPDATE majorarcana2 SET TrumpNumber=1 WHERE TrumpName='The Magician'");
//        $dbMajArc->query("UPDATE majorarcana2 SET TrumpNumber=2 WHERE TrumpName='The High Priestess'");
//        $dbMajArc->query("UPDATE majorarcana2 SET TrumpNumber=3 WHERE TrumpName='The Empress'");
//        $dbMajArc->query("UPDATE majorarcana2 SET TrumpNumber=4 WHERE TrumpName='The Emperor'");
//        $dbMajArc->query("UPDATE majorarcana2 SET TrumpNumber=5 WHERE TrumpName='The Hierophant'");
//        $dbMajArc->query("UPDATE majorarcana2 SET TrumpNumber=6 WHERE TrumpName='The Lovers'");
//        $dbMajArc->query("UPDATE majorarcana2 SET TrumpNumber=7 WHERE TrumpName='The Chariot'");
//        $dbMajArc->query("UPDATE majorarcana2 SET TrumpNumber=8 WHERE TrumpName='Strength'");
//        $dbMajArc->query("UPDATE majorarcana2 SET TrumpNumber=9 WHERE TrumpName='The Hermit'");
//        $dbMajArc->query("UPDATE majorarcana2 SET TrumpNumber=10 WHERE TrumpName='Fortune'");
//        $dbMajArc->query("UPDATE majorarcana2 SET TrumpNumber=11 WHERE TrumpName='Justice'");
//        $dbMajArc->query("UPDATE majorarcana2 SET TrumpNumber=12 WHERE TrumpName='The Hanged Man'");
//        $dbMajArc->query("UPDATE majorarcana2 SET TrumpNumber=13 WHERE TrumpName='Death'");
//        $dbMajArc->query("UPDATE majorarcana2 SET TrumpNumber=14 WHERE TrumpName='Temperance'");
//        $dbMajArc->query("UPDATE majorarcana2 SET TrumpNumber=15 WHERE TrumpName='The Devil'");
//        $dbMajArc->query("UPDATE majorarcana2 SET TrumpNumber=16 WHERE TrumpName='The Tower'");
//        $dbMajArc->query("UPDATE majorarcana2 SET TrumpNumber=17 WHERE TrumpName='The Star'");
//        $dbMajArc->query("UPDATE majorarcana2 SET TrumpNumber=18 WHERE TrumpName='The Moon'");
//        $dbMajArc->query("UPDATE majorarcana2 SET TrumpNumber=19 WHERE TrumpName='The Sun'");
//        $dbMajArc->query("UPDATE majorarcana2 SET TrumpNumber=20 WHERE TrumpName='Judgment'");
//        $dbMajArc->query("UPDATE majorarcana2 SET TrumpNumber=21 WHERE TrumpName='The World'");
        
    
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

