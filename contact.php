<?php $pageTitle = "Contact" ?>
<?php require 'header.php' ?>

<?php
  if (!empty($_POST)) {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);
    $captcha = htmlspecialchars($_POST['g-recaptcha-response']);

    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6Lfx0n4UAAAAAPi0gSb9Z4wDyVEElnOcxQ4buhrQ&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']);

    if (json_decode($response, true)['success']) {
      require 'contactsuccess.php';
      /*
       * TODO: Send email to me with submitted information.
       * TODO: Send confirmation email to user.
       */
    }
    else {
      require 'contactdefault.php';
    }
  }
  else {
    require 'contactdefault.php';
  }
?>

<?php require 'footer.php' ?>
