<?php $pageTitle = "Why Portuguese?" ?>
<?php
  $imgSliderData = file_get_contents("assets/why.json");
?>
<script type="text/javascript">
  window.imgSliderData = <?php echo $imgSliderData ?>
</script>
<?php require 'header.php' ?>

<!-- Why content container -->
<div class="container light-grey">
  <div class="extra"></div>
  <div class="row pad64">
    <span class="content-title clearboth">Why Portuguese?</span>
    <span class="content-subtitle clearboth">Why Brazil?</span>
  </div>
  <div class="extra"></div>
  <div class="row-flex bottom48">
    <div class="eight columns">
      <div class="imgSlider" @mouseover="mouseenter" @mouseout="mouseleave">
        <div class="imgSliderFlex">
          <img class="slider-arrow aleft" :class="{oshow: hovered}" @click="goToImg(0, 0)" src="assets/expand-more.svg" alt="">
          <div id="imgSliderItem" class="imgSliderItem" :class="{imgSliderItemAnimLeft: exitLeft, imgSliderItemAnimRight: exitRight}">
            <div class="imgSliderItemText">
              <div style="overflow: hidden">
                <span class="imgSliderItemTitle clearboth" :class="{imgSliderItemTitleAnim: animate}" ref="imgSliderItemTitle">{{ title }}</span>
              </div>
              <div class="imgSliderItemTextDivider" :class="{imgSliderItemTextDividerAnim: animate}" ref="imgSliderItemTextDivider"></div>
              <span class="imgSliderItemSubtitle clearboth" :class="{imgSliderItemSubtitleAnim: animate}" ref="imgSliderItemSubtitle">{{ subtitle }}</span>
            </div>
            <div class="yellow imgSliderItemImgHolder" :class="{imgSliderItemImgHolderAnim: animate}" ref="imgSliderItemImgHolder">
              <img class="imgSliderItemImg" :class="{imgSliderItemImgAnim: animate}" :src="img" ref="imgSliderItemImg" alt="">
            </div>
          </div>
          <img class="slider-arrow aright" :class="{oshow: hovered}" @click="goToImg(1, 0)" src="assets/expand-more.svg" alt="">
        </div>
        <div class="imgSliderIndicator" :class="{oshow: hovered}">
          <div class="imgSliderIndicatorItem" v-for="index in length" :key="index" :class="{imgSliderIndicatorItemSelected: ((index - 1) === current)}"  @click="goToImg(2, index)"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="row-flex bottom64">
    <div class="eight columns">
      <div class="content-text-container padNone">
        <span class="content-paragraph">
          There are nearly 236 million native speakers of Portuguese in an increasingly globalized world.
          Portuguese is widely spoken in Brazil, Portugal, Angola, Cape Verde, Guinea-Bissau, Mozambique,
          São Tomé and Príncipe, East Timor, Macau, and many other places.<br>
          <br>
          In 2012 Brazil overtook the UK as the 6th largest economy in the world. Brazil is also the home
          to the 2014 World Cup and the 2016 Olympics, in Rio de Janeiro. 36 Brazilian companies appeared
          in the Forbes Global 2000 ranking of the top 2000 public companies in the world, with oil and gas
          producer Petrobras ranked 4th, and the mining company Vale ranked 20th. Brazil is also the global
          leader in soybean exports, produces roughly 80% of the planet’s orange juice, and is the largest
          producer of beef in the world.<br>
          <br>
          Proficient Portuguese speakers are in high demand. PFP scholars are poised to become:<br>
          <ul>
            <li>Future diplomats and leaders.</li>
            <li>Political and intelligence government analysts.</li>
            <li>Entrepreneurs and business executives for global companies.</li>
            <li>Pioneers to develop health, education and national policies.</li>
            <li>International traders and lawyers.</li>
            <li>Engineers designing the future to meet our changing energy needs.</li>
            <li>The next generation of Portuguese language teachers.</li>
          </ul>
        </span>
      </div>
    </div>
  </div>
  <div class="extra"></div>
</div>

<?php require 'footer.php' ?>
