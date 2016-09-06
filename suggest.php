<?php

ob_start();
$pageTitle="Titus Salmon | Contact"; include ('includes/header.php');?>
<body>


<?php


require("includes/vendor/phpmailer/phpmailer/PHPMailerAutoload.php");
require("includes/vendor/phpmailer/phpmailer/class.phpmailer.php");


$mail = new PHPMailer;
$mail->SMTPDebug =3;

if ($_SERVER["REQUEST_METHOD"] == "POST")
    
    {
    
    
        
        $name = trim(filter_input(INPUT_POST,"name",FILTER_SANITIZE_STRING));
        $email = trim(filter_input(INPUT_POST,"email",FILTER_SANITIZE_EMAIL));
        $questions_comments = trim(filter_input(INPUT_POST,"questions_comments",FILTER_SANITIZE_SPECIAL_CHARS));
    
        

        if (!isset($error_message) && ($name == "" || $email == "" || $questions_comments == ""))
            {
                $error_message = "Please fill in the required fields: Name, Email, and Details";
            }
    
        if (!isset($error_message) && $_POST["address"] != "")
            {
                $error_message = "Bad form input"; //honeypot
            }

        if (!isset($error_message) && !$mail->ValidateAddress($email))
            {
                $error_message = "Invalid Email Address";
            }

        if (!isset($error_message))
            {

                $email_body = "";
                $email_body .= "Name " . $name . "\n";
                $email_body .= "Email " . $email . "\n";
                $email_body .= "Questions/Comments " . $questions_comments . "\n";

           
            $mail->IsSMTP();                                      // Set mailer to use SMTP
                $mail->Host = 'mail.bluehyperion.com';  // Specify main and backup SMTP servers
//     



                $mail->setFrom($email, $name);
                $mail->addAddress('bluehype@bluehyperion.com', 'Blue Hyperion Press');     // Add a recipient
            
            
            
            
            

                $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
                $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
                $mail->isHTML(true);                                  // Set email format to HTML

                $mail->Subject = 'Here is the subject from ' . $name;
                $mail->Body    = $email_body;
            
                if(!$mail->send())
                    {
                        $error_message = 'Message could not be sent.';
                        $error_message .= 'Mailer Error: ' . $mail->ErrorInfo;
                    }
            
        
                header("location:suggest.php?status=thanks");
                
            
            

            }
    }
    
    




$pageTitle = "Email Blue Hyperion";
$section = "suggest";


    if (isset($error_message))
    {
        echo "<p class='message'>" . $error_message . "</p>"; 
    }
                


    if (isset ($_GET["status"]) && $_GET["status"] == "thanks")
    {
        echo "<p>Your question/comment will be reviewed. The staff at Blue Hyperion Press will make every effort to respond to any applicable questions in a timely fashion. However, please be aware that response time is contingent upon content and query volume.</p>";
    }

    else

    {            
    ?>


    
        <h1 class="h1center">Email Blue Hyperion Press</h1>
        
        
                    <p class="pcenter">Please complete form to email Blue Hyperion Press with any questions or comments.</p>



                    <form class="formcenter" method = "post" action="suggest.php">
                        <table class="tablecenter">
                            <tr class>
                                <th class><label for="name">Name (required)</label></th>
                                <td><input type="text" id="name" name="name" value="<?php if (isset($name)) {echo htmlspecialchars($name); } ?>"/></td>
                            </tr>
                            <tr>
                                <th><label for="email">Email (required)</label></th>
                                <td><input type="text" id="email" name="email" value="<?php if (isset($value)) {echo htmlspecialchars($value); } ?>"/></td>
                            </tr>

                            <tr>
                                <th><label for="questions_comments">Questions/Comments (required)</label></th>
                                <td><textarea name="questions_comments" id="questions_comments"><?php if (isset($questions_comments)) {echo htmlspecialchars($questions_comments); }?></textarea></td>
                            </tr>
                            <tr style="display:none">
                                <th><label for="address">Address</label></th>
                                <td><input type="text" id="address" name="address"/>
                                <p>Please leave this field blank.</p></td>
                            </tr>
                        </table>
                        <input type="submit" value="Send" />
                    </form>
<?php } ?>
                
    

</body>



 

<?php include("includes/footer.php");



