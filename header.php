<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <title>Portuguese Flagship - <?php echo $pageTitle ?></title>
  <link rel="icon" href="http://www.portflagship.org/wp-content/uploads/2012/10/logomark1.png">
  <script type="text/javascript" src="https://www.google.com/recaptcha/api.js"></script>
  <script type="text/javascript" src="js/vue.js"></script>
  <script type="text/javascript" src="js/scripts.js"></script>
  <link href="css/style.css" rel="stylesheet">
  <link href="css/skeleton.css" rel="stylesheet">
  <link href="css/normalize.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Crimson+Text:400,700|Montserrat:100,400,700,900" rel="stylesheet">
</head>
<body>

  <!-- Logo container -->
  <div class="container">
    <div class="row pad16">
      <!-- TODO: remove styling of img -->
      <a href="index.php"><img style="margin-right: 60px" src="http://www.portflagship.org/wp-content/uploads/2013/01/Banner_left.png"/></a>
      <a href="http://www.lacsiuga.org/"><img style="max-height: 115px; margin-left: 60px" src="http://www.portflagship.org/wp-content/uploads/2018/11/lacsi-logo-e1542519621890.png"/></a>
    </div>
  </div>

  <!-- Navigation container -->
  <ul class="nav">
    <li @mouseover="mouseenter(0)" @mouseout="mouseleave(0)">
      <a href="index.php">Home</a>
      <div :class="{extended: tabs[0].hovered, 'extended-perm': tabs[0].selected}"></div>
    </li>
    <li @mouseover="mouseenter(1)" @mouseout="mouseleave(1)">
      <a href="program.php">The Program</a>
      <img src="http://www.portflagship.org/wp-content/uploads/2018/11/arrow.png" alt="">
      <div :class="{extended: tabs[1].hovered, 'extended-perm': tabs[1].selected}"></div>
      <ul id="programDrop">
        <a v-for="(item, index) in tabs[1].dropdown" :href="item.link"><li>{{ item.title }}</li></a>
      </ul>
    </li>
    <li @mouseover="mouseenter(2)" @mouseout="mouseleave(2)">
      <a href="ufsj.php">Partnerships</a>
      <img src="http://www.portflagship.org/wp-content/uploads/2018/11/arrow.png" alt="">
      <div :class="{extended: tabs[2].hovered, 'extended-perm': tabs[2].selected}"></div>
      <ul id="partnerDrop">
        <a v-for="(item, index) in tabs[2].dropdown" :href="item.link"><li>{{ item.title }}</li></a>
      </ul>
    </li>
    <li @mouseover="mouseenter(3)" @mouseout="mouseleave(3)">
      <a href="testimonials.php">Students</a>
      <img src="http://www.portflagship.org/wp-content/uploads/2018/11/arrow.png" alt="">
      <div :class="{extended: tabs[3].hovered, 'extended-perm': tabs[3].selected}"></div>
      <ul id="studentDrop">
        <a v-for="(item, index) in tabs[3].dropdown" :href="item.link"><li>{{ item.title }}</li></a>
      </ul>
    </li>
    <li @mouseover="mouseenter(4)" @mouseout="mouseleave(4)">
      <a href="apply.php">Apply</a>
      <div :class="{extended: tabs[4].hovered, 'extended-perm': tabs[4].selected}"></div>
    </li>
    <li @mouseover="mouseenter(5)" @mouseout="mouseleave(5)">
      <a href="news.php">News & Events</a>
      <div :class="{extended: tabs[5].hovered, 'extended-perm': tabs[5].selected}"></div>
    </li>
    <li @mouseover="mouseenter(6)" @mouseout="mouseleave(6)">
      <a href="contact.php">Contact</a>
      <div :class="{extended: tabs[6].hovered, 'extended-perm': tabs[6].selected}"></div>
    </li>
  </ul>
