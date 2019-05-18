<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta name='viewport' content="width=device-width, initial-scale=1" />
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
    <div class="row-flex">
      <a href="index.php" class="logoFlagship"></a>
      <a href="http://www.lacsiuga.org/" class="logoUGA"></a>
    </div>
  </div>

  <!-- Navigation container -->
  <ul class="nav">
    <img class="menu-placeholder" src="assets/menu.svg">
    <img class="menu" onclick="showDrawer()" src="assets/menu.svg">
    <li @mouseover="mouseenter(0)" @mouseout="mouseleave(0)">
      <a class="navLink" href="index.php">Home</a>
      <div :class="{extended: tabs[0].hovered, 'extended-perm': tabs[0].selected}"></div>
    </li>
    <li @mouseover="mouseenter(1)" @mouseout="mouseleave(1)">
      <a class="navLink" href="program.php">The Program</a>
      <img src="assets/expand-more.svg" alt="">
      <div class="shifted" :class="{'extended-small': tabs[1].hovered, 'extended-perm-small': tabs[1].selected}"></div>
      <ul id="programDrop">
        <a v-for="(item, index) in tabs[1].dropdown" :href="item.link"><li>{{ item.title }}</li></a>
      </ul>
    </li>
    <li @mouseover="mouseenter(2)" @mouseout="mouseleave(2)">
      <a class="navLink" href="ufsj.php">Partnerships</a>
      <img src="assets/expand-more.svg" alt="">
      <div class="shifted" :class="{'extended-small': tabs[2].hovered, 'extended-perm-small': tabs[2].selected}"></div>
      <ul id="partnerDrop">
        <a v-for="(item, index) in tabs[2].dropdown" :href="item.link"><li>{{ item.title }}</li></a>
      </ul>
    </li>
    <li @mouseover="mouseenter(3)" @mouseout="mouseleave(3)">
      <a class="navLink" href="testimonials.php">Students</a>
      <img src="assets/expand-more.svg" alt="">
      <div class="shifted" :class="{'extended-small': tabs[3].hovered, 'extended-perm-small': tabs[3].selected}"></div>
      <ul id="studentDrop">
        <a v-for="(item, index) in tabs[3].dropdown" :href="item.link"><li>{{ item.title }}</li></a>
      </ul>
    </li>
    <li @mouseover="mouseenter(4)" @mouseout="mouseleave(4)">
      <a class="navLink" href="apply.php">Apply</a>
      <div :class="{extended: tabs[4].hovered, 'extended-perm': tabs[4].selected}"></div>
    </li>
    <li @mouseover="mouseenter(5)" @mouseout="mouseleave(5)">
      <a class="navLink" href="news.php">News & Events</a>
      <div :class="{extended: tabs[5].hovered, 'extended-perm': tabs[5].selected}"></div>
    </li>
    <li @mouseover="mouseenter(6)" @mouseout="mouseleave(6)">
      <a class="navLink" href="contact.php">Contact</a>
      <div :class="{extended: tabs[6].hovered, 'extended-perm': tabs[6].selected}"></div>
    </li>
  </ul>

  <div class="drawer">
    <div class="row top32 bottom8">
      <img src="assets/compass.svg" height="48px" alt="">
    </div>
    <div class="row">
      <ul>
        <a href="index.php">
          <li>
            <img src="assets/home.svg" alt="">
            <span>Home</span>
          </li>
        </a>
        <li onclick="toggleDrawerItem(0)">
          <img src="assets/program.svg" alt="">
          <span>The Program</span>
          <img src="assets/expand-more.svg" alt="">
        </li>
        <ul id="drawerProgramDrop">
          <a href="why.php">
            <li>Why Portuguese?</li>
          </a>
          <a href="program.php">
            <li>Study Abroad</li>
          </a>
          <a href="requirements.php">
            <li>Program Requirements</li>
          </a>
          <a href="aid.php">
            <li>Financial Aid</li>
          </a>
          <a href="faq.php">
            <li>FAQ</li>
          </a>
          <a href="staff.php">
            <li>Faculty & Staff</li>
          </a>
        </ul>
        <li onclick="toggleDrawerItem(1)">
          <img src="assets/partnerships.svg" alt="">
          <span>Partnerships</span>
          <img src="assets/expand-more.svg" alt="">
        </li>
        <ul id="drawerPartnerDrop">
          <a href="ufsj.php">
            <li>UFSJ</li>
          </a>
          <a href="k12.php">
            <li>K-12</li>
          </a>
          <a href="internships.php">
            <li>Internships</li>
          </a>
        </ul>
        <li onclick="toggleDrawerItem(2)">
          <img src="assets/student.svg" alt="">
          <span>Students</span>
          <img src="assets/expand-more.svg" alt="">
        </li>
        <ul  id="drawerStudentDrop">
          <a href="testimonials.php">
            <li>Student Testimonials</li>
          </a>
          <a href="cohort2019.php">
            <li>2019 Cohort</li>
          </a>
          <a href="alumni2018.php">
            <li>Alumni 2018</li>
          </a>
          <a href="alumni2017.php">
            <li>Alumni 2017</li>
          </a>
          <a href="alumni2016.php">
            <li>Alumni 2016</li>
          </a>
          <a href="alumni2015.php">
            <li>Alumni 2015</li>
          </a>
          <a href="alumni2014.php">
            <li>Alumni 2014</li>
          </a>
          <a href="alumni2013.php">
            <li>Alumni 2013</li>
          </a>
        </ul>
        <a href="apply.php">
          <li>
            <img src="assets/apply.svg" alt="">
            <span>Apply</span>
          </li>
        </a>
        <a href="news.php">
          <li>
            <img src="assets/news.svg" alt="">
            <span>News & Events</span>
          </li>
        </a>
        <a href="contact.php">
          <li>
            <img src="assets/contact.svg" alt="">
            <span>Contact</span>
          </li>
        </a>
      </ul>
    </div>
  </div>
