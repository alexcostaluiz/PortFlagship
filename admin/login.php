<?php $pageTitle = "Login" ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta name='viewport' content="width=device-width, initial-scale=1" />
  <title>Portuguese Flagship - <?php echo $pageTitle ?></title>
  <link rel="icon" href="http://www.portflagship.org/wp-content/uploads/2012/10/logomark1.png">
  <script type="text/javascript" src="https://www.google.com/recaptcha/api.js"></script>
  <script type="text/javascript" src="../js/vue.js"></script>
  <!--<script type="text/javascript" src="../js/scripts.js"></script>-->
  <link href="../css/style.css" rel="stylesheet">
  <link href="../css/skeleton.css" rel="stylesheet">
  <link href="../css/normalize.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Crimson+Text:400,700|Montserrat:100,400,700,900" rel="stylesheet">
</head>
<body>

  <div class="container light-grey" style="height: 100vh">
    <div class="row-flex" style="height: 100vh">
      <div class="five columns">
        <img class="bottom8" src="http://www.portflagship.org/wp-content/uploads/2012/10/logomark1.png" width="90px" alt="">
        <form id="contact-form" class="bottom16" style="position: relative" method="post" onsubmit="return validateContactForm()">
          <div class="contact-input-container">
            <span class="contact-header clearboth left">Username</span>
            <input class="contact-input" type="text" name="name" required>
          </div>
          <br><br>
          <div class="contact-input-container">
            <span class="contact-header clearboth left">Password</span>
            <input class="contact-input" type="email" name="email" required>
          </div>
          <br><br>
          <button type="submit" name="submit" class="content-button invert">Log in</button>
        </form>
        <a href="../index.php" style="text-decoration: none; color: #222"><span class="left-text center" style="width: 50%; font-family: 'Crimson Text'">← Return to portflagship.org</span></a>
      </div>
    </div>
  </div>

</body>
