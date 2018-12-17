<?php $pageTitle = "Home" ?>
<?php require 'header.php' ?>

<!-- Slider container -->
<div class="slider">
  <div class="slider-background"></div>
  <div class="sliderImg" :class="{oshow: loaded && !enterNext, sliderImgEnterUp: enterUp && !enterNext, sliderImgEnterDown: enterDown && !enterNext, sliderImgExitUp: exitUp && enterNext, sliderImgExitDown: exitDown && enterNext, cursorDefault: link === undefined || enterNext, over: !enterNext}" @click="goToLink()" :style="{backgroundImage: 'url(' + img + ')'}"></div>
  <div class="sliderItem" @click="goToLink()" :class="{cursorDefault: link === undefined || enterNext, over: !enterNext}">
    <span class="sliderTitle clearboth" :class="{oshow: loaded && !enterNext, sliderTextEnterUp: enterUp && !enterNext, sliderTextEnterDown: enterDown && !enterNext, sliderTextExitUp: exitUp && enterNext, sliderTextExitDown: exitDown && enterNext, cursorDefault: link === undefined || enterNext}">{{ title }}</span>
    <span class="sliderSubtitle clearboth" :class="{oshow: loaded && !enterNext, sliderTextEnterUp: enterUp && !enterNext, sliderTextEnterDown: enterDown && !enterNext, sliderTextExitUp: exitUp && enterNext, sliderTextExitDown: exitDown && enterNext, cursorDefault: link === undefined || enterNext}">{{ subtitle }}</span>
  </div>
  <div class="sliderImg" :class="{oshow: loaded && enterNext, sliderImgEnterUp: enterUp && enterNext, sliderImgEnterDown: enterDown && enterNext, sliderImgExitUp: exitUp && !enterNext, sliderImgExitDown: exitDown && !enterNext, cursorDefault: linkNext === undefined || !enterNext, over: enterNext}" @click="goToLink()" :style="{backgroundImage: 'url(' + imgNext + ')'}"></div>
  <div class="sliderItem" @click="goToLink()" :class="{cursorDefault: linkNext === undefined || !enterNext, over: enterNext}">
    <span class="sliderTitle clearboth" :class="{oshow: loaded && enterNext, sliderTextEnterUp: enterUp && enterNext, sliderTextEnterDown: enterDown && enterNext, sliderTextExitUp: exitUp && !enterNext, sliderTextExitDown: exitDown && !enterNext, cursorDefault: linkNext === undefined || !enterNext}">{{ titleNext }}</span>
    <span class="sliderSubtitle clearboth" :class="{oshow: loaded && enterNext, sliderTextEnterUp: enterUp && enterNext, sliderTextEnterDown: enterDown && enterNext, sliderTextExitUp: exitUp && !enterNext, sliderTextExitDown: exitDown && !enterNext, cursorDefault: linkNext === undefined || !enterNext}">{{ subtitleNext }}</span>
  </div>
  <div class="sliderArrow sliderArrowLeft" :class="{sliderArrowLeftLoaded: loaded}" @click="goToImg(0, 0)"></div>
  <div class="sliderArrow sliderArrowRight" :class="{sliderArrowRightLoaded: loaded}" @click="goToImg(1, 0)"></div>
  <div class="sliderIndicator" :class="{sliderIndicatorLoaded: loaded}">
    <div class="sliderIndicatorItem" v-for="index in length" :key="index" :class="{sliderIndicatorItemSelected: ((index - 1) === current)}"  @click="goToImg(2, index)"></div>
  </div>
  <div class="loading" :class="{ohide: loaded}">
    <div class="loading-item one"></div>
    <div class="loading-item two"></div>
    <div class="loading-item three"></div>
  </div>
</div>

<!-- Welcome container -->
<div class="container light-grey">
  <div class="row pad32">
    <span class="content-title clearboth">Bem-vindo!</span>
    <span class="content-subtitle clearboth">Welcome</span>
  </div>
  <div class="row-flex pad64 padNoTop" style="margin-left: 48px">
    <img src="http://www.portflagship.org/wp-content/uploads/2012/10/pfpstaff3.jpg" height="600px" alt="">
    <div class="eight columns">
      <div class="content-text-container white left48">
        <span class="content-header clearboth">The program</span>
        <span class="content-paragraph clearboth">
          The Portuguese Flagship Program (PFP) at the University of Georgia is the first and only of its kind.
          Intended for UGA undergraduate students with a unique commitment to reach the highest levels of Portuguese
          and to apply those skills in a professional context, the PFP offers an unprecedented opportunity for
          students to internationalize their academic experience. For many it will also serve as a stepping-stone into
          an international career. More than a study abroad program, the PFP is structured to complement the student’s
          major area of study from the moment he or she arrives at UGA. Participating students also benefit from regular
          group or one-on-one tutorials, Skype partners in Brazil, support for immersion experiences both in the US and
          abroad, and a capstone year studying at UFSJ - a leading Brazilian university - with a semester long
          internship in Brazil. We encourage you to browse the site and contact us, or just visit us at the PFP office.<br>
          <br>
        </span>
        <a href="program.php" class="content-link">Learn more</a>
        <!-- TODO: remove img styling -->
        <img class="right clearboth" style="max-height: 48px" src="http://www.portflagship.org/flagship-staging/wp-content/uploads/2012/10/signature_Dr.-Moser1.png" alt="">
        <br>
        <br>
        <span class="content-paragraph right">Director, Portuguese Flagship Program</span>
        <br>
      </div>
    </div>
  </div>
</div>

<!-- More About Flagship container -->
<div class="container">
  <div class="row pad32">
    <span class="content-title clearboth">More About Flagship</span>
    <span class="content-subtitle clearboth">Language Flagship</span>
  </div>
  <div class="row-flex top16">
    <div class="video-container" onclick="playVideo()">
      <img class="video-play-icon" src="http://www.portflagship.org/wp-content/uploads/2018/12/icons8-play-100.png" alt="">
      <img class="video-thumbnail" src="http://www.portflagship.org/wp-content/uploads/2018/12/language-flagship-e1544940292274.png" height="200px" alt="">
    </div>
  </div>
  <div class="row-flex pad32">
    <div class="six columns">
      <div class="content-text-container padNone">
        <span class="content-header clearboth">Flagship</span>
        <a class="content-link" href="http://www.thelanguageflagship.org/">The Language Flagship</a>
        <span class="content-paragraph">
          is a national initiative to change the way Americans learn foreign languages. Offering cutting-edge programs
          for U.S. undergraduates in critical languages, including Portuguese, The Language Flagship is dedicated to
          creating the next generation of global professionals. Watch this video for a better idea of why The Language
          Flagship is breaking the mold.<br>
          <br>
          The UGA Portuguese Flagship Program is funded by The Language Flagship, a public/private partnership sponsored
          by the National Security Education Program.<br>
          <br>
        </span>
      </div>
    </div>
  </div>
</div>

<!-- Get To Know Us container -->
<div class="container light-grey">
  <div class="row pad32">
    <span class="content-title clearboth">Get to know us</span>
    <span class="content-subtitle clearboth">Our students</span>
  </div>
  <div class="row-flex pad32">
    <div class="seven columns" style="position: relative">
      <div id="studentLoading" class="loading">
        <div class="loading-item one"></div>
        <div class="loading-item two"></div>
        <div class="loading-item three"></div>
      </div>
      <div style="overflow: hidden">
        <div id="headshot-flex" class="headshot-flex" style="flex-wrap: nowrap; overflow-x: scroll; margin-bottom: -50px; padding-bottom: 50px">
          <div id="headshot-container" class="headshot-container" style="opacity: 0">
            <div class="headshot-border">
              <img class="headshot" src="http://www.portflagship.org/wp-content/uploads/2013/02/2015-Signe-Hanson.jpg1_-150x150.jpg" alt="">
            </div>
            <span class="headshot-name clearboth">Caroline Stephenson</span>
            <span class="headshot-major clearboth">Political Science</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row-flex pad64 padNoTop">
    <div class="five columns">
      <div class="content-text-container padNone">
        <div class="content-header">Our Students</div>
        <span class="content-paragraph">
          Portuguese Flagship Students come from a wide variety of backgrounds.
          Each are working towards unique professional goals that are greatly enhanced by fluency in Portuguese.<br>
          <br>
        </span>
        <a class="content-link" href="testimonials.php">Learn more</a>
      </div>
    </div>
  </div>
</div>

<!-- Mission container -->
<div class="container">
  <div class="row pad32">
    <span class="content-title clearboth">Nossa missão</span>
    <span class="content-subtitle clearboth">Our mission</span>
  </div>
  <div class="row-flex pad64 padNoTop">
    <img style="max-height: 450px" src="http://www.portflagship.org/wp-content/uploads/2018/11/mission-e1542577540209.jpg" alt="">
    <div class="six columns">
      <div class="content-text-container noleft light-grey left24">
        <span class="content-header clearboth">MISSION</span>
        <span class="content-paragraph">
          In collaboration with The Language Flagship and UFSJ (Federal University of São João del Rey),
          the mission of UGA’s Portuguese Flagship Program (PFP) is to graduate students, through innovative language
          education, with Superior level proficiency in Portuguese and overseas internship experience, to create the next
          generation of global professionals.
        </span>
      </div>
    </div>
  </div>
</div>

<!-- Why Portuguese container -->
<div class="container light-grey">
  <div class="row pad32">
    <span class="content-title clearboth">Why portuguese?</span>
    <span class="content-subtitle clearboth">Why brazil?</span>
  </div>
  <div class="row-flex pad64 padNoTop" style="padding-bottom: 96px">
    <!-- TODO: remove img styling -->
    <img class="right24up32" style="max-height: 180px; align-self: flex-start" src="http://www.portflagship.org/wp-content/uploads/2012/10/Brazil-Rio.jpg" alt="">
    <div class="eight columns" style="z-index: 1">
      <div class="content-text-container white">
        <span class="content-header clearboth">Why</span>
        <span class="content-paragraph clearboth">
          Portuguese is currently the 7th most widely spoken language in the world. Also, the rapid growth of the Brazilian economy
          (now the 6th largest worldwide) is causing a surge in the demand for Portuguese speakers. Home of the 2014 World Cup and the
          2016 Olympics (in Rio de Janeiro), Brazil is on the rise, as is the Portuguese language. From Europe to Africa, Asia to North
          America – with large Lusophone communities in the US and Canada – knowledge of Portuguese has never been more important. Graduates
          from Flagship centers are highly sought after in both the public and private sector, and gain a competitive edge when applying
          for jobs, graduate school, and scholarships. The Portuguese Flagship Program is accepting applications now from UGA undergradate
          students.<br>
          <br>
        </span>
        <a class="content-link" href="why.php">Learn more</a>
      </div>
    </div>
    <!-- TODO: remove img styling -->
    <img class="left24down32" style="max-height: 180px; align-self: flex-end" src="http://www.portflagship.org/wp-content/uploads/2012/10/HPIM0326.jpeg" alt="">
  </div>
</div>

<!-- Apply container -->
<div class="container">
  <div class="row pad32">
    <span class="content-title clearboth">Apply Now</span>
    <span class="content-subtitle clearboth">Portuguese Flagship</span>
  </div>
  <div class="row-flex pad64 padNoTop">
    <div class="twelve columns">
      <div class="content-text-container light-grey right24">
        <span class="content-header clearboth">Apply</span>
        <span class="content-paragraph clearboth">
          The Portuguese Flagship Program is an undergraduate program at the University of Georgia
          designed for students who demonstrate a unique commitment to the study of Portuguese and
          the motivation to reach the highest levels of proficiency. Flagship entrance requirements:<br>
          <ul>
            <li class="content-paragraph">Full-time undergraduate student admitted to UGA.</li>
            <li class="content-paragraph">Commitment to working towards a Superior level of Portuguese (ACTFL tested) upon completion of program.</li>
            <li class="content-paragraph">U.S. citizen or permanent resident, to be eligible for possible federal funding.</li>
          </ul>
          <br>
        </span>
        <a href="apply.php"><div class="content-button invert" style="margin-right: 24px">APPLY</div></a>
        <a class="content-link" href="program.php">Learn more</a>
      </div>
    </div>
    <img src="http://www.portflagship.org/wp-content/uploads/2018/11/apply.jpg" alt="">
  </div>
</div>

<!-- Partners container -->
<div class="container light-grey">
  <div class="row pad32">
    <span class="content-title clearboth">Our partners</span>
  </div>
  <div class="partner-flex">
    <a href="https://www.thelanguageflagship.org/"><img class="partner-logo" src="http://www.portflagship.org/wp-content/uploads/2018/11/the-language-flagship.png" alt=""></a>
    <a href="https://www.uga.edu/"><img class="partner-logo" src="http://www.portflagship.org/wp-content/uploads/2018/11/yga.png" alt=""></a>
    <a href="https://www.ufsj.edu.br/"><img class="partner-logo" src="http://www.portflagship.org/wp-content/uploads/2018/11/ufsj.png" alt=""></a>
  </div>
</div>

<?php require 'footer.php' ?>
