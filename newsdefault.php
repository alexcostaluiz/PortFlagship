<?php $pageTitle = "News & Events" ?>
<?php require 'header.php' ?>
<script type="text/javascript">
  window.pageID = <?php echo $pageID ?>
</script>

<div class="container light-grey">
  <div class="extra"></div>
  <div class="row pad64">
    <span class="content-title clearboth">News & Events</span>
    <span class="content-subtitle clearboth">Portuguese Flagship</span>
  </div>
  <div class="extra"></div>
  <div class="row">
    <div class="news column bottom32 extra-margin">
      <span class="content-header center-text bottom16 clearboth">News</span>
      <div class="divider-container bottom32">
        <span class="section">§</span>
        <div class="divider"></div>
        <span class="section mirror">§</span>
      </div>
      <div class="extra"></div>
      <div id="news">
        <div id="<?php echo $postRange ?>" class="news-container">
          <div class="news-border">
            <div class="news-inside-border">
              <div class="news-image" style="background-image: url(<?php echo $newsDataArray[$postRange]['imageURL'] ?>)"></div>
              <div class="news-text-container">
                <span class="news-category clearboth"><?php echo $newsDataArray[$postRange]['category'] ?></span>
                <span class="news-title clearboth"><?php echo $newsDataArray[$postRange]['title'] ?></span>
              </div>
            </div>
          </div>
        </div>
        <div id="<?php echo ($postRange - 1) ?>" class="news-container">
          <div class="news-border">
            <div class="news-inside-border">
              <div class="news-image" style="background-image: url(<?php echo $newsDataArray[$postRange - 1]['imageURL'] ?>)"></div>
              <div class="news-text-container">
                <span class="news-category clearboth"><?php echo $newsDataArray[$postRange - 1]['category'] ?></span>
                <span class="news-title clearboth"><?php echo $newsDataArray[$postRange - 1]['title'] ?></span>
              </div>
            </div>
          </div>
        </div>
        <div id="<?php echo ($postRange - 2) ?>" class="news-container">
          <div class="news-border">
            <div class="news-inside-border">
              <div class="news-image" style="background-image: url(<?php echo $newsDataArray[$postRange - 2]['imageURL'] ?>)"></div>
              <div class="news-text-container">
                <span class="news-category clearboth"><?php echo $newsDataArray[$postRange - 2]['category'] ?></span>
                <span class="news-title clearboth"><?php echo $newsDataArray[$postRange - 2]['title'] ?></span>
              </div>
            </div>
          </div>
        </div>
        <div id="<?php echo ($postRange - 3) ?>" class="news-container">
          <div class="news-border">
            <div class="news-inside-border">
              <div class="news-image" style="background-image: url(<?php echo $newsDataArray[$postRange - 3]['imageURL'] ?>)"></div>
              <div class="news-text-container">
                <span class="news-category clearboth"><?php echo $newsDataArray[$postRange - 3]['category'] ?></span>
                <span class="news-title clearboth"><?php echo $newsDataArray[$postRange - 3]['title'] ?></span>
              </div>
            </div>
          </div>
        </div>
        <div id="<?php echo ($postRange - 4) ?>" class="news-container">
          <div class="news-border">
            <div class="news-inside-border">
              <div class="news-image" style="background-image: url(<?php echo $newsDataArray[$postRange - 4]['imageURL'] ?>)"></div>
              <div class="news-text-container">
                <span class="news-category clearboth"><?php echo $newsDataArray[$postRange - 4]['category'] ?></span>
                <span class="news-title clearboth"><?php echo $newsDataArray[$postRange - 4]['title'] ?></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="news-pager" class="page-selector">
        <?php
          for ($i = 0; $i < $pageCount; $i++) {
            echo '<div class="page-number"></div>';
          }
        ?>
      </div>
    </div>
    <div class="events column">
      <span class="content-header center-text bottom16 clearboth">Events</span>
      <div class="divider-container bottom32">
        <span class="section">§</span>
        <div class="divider"></div>
        <span class="section mirror">§</span>
      </div>
      <div class="extra"></div>
      <div class="calendar">
        <img onclick="goToMonth(false)" src="assets/expand-more.svg" alt="">
        <span><?php echo date('F Y') ?></span>
        <img onclick="goToMonth(true)" src="assets/expand-less.svg" alt="">
        <table>
          <thead>
            <tr>
              <th>Su</th>
              <th>Mo</th>
              <th>Tu</th>
              <th>We</th>
              <th>Th</th>
              <th>Fr</th>
              <th>Sa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <!-- one -->
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <!-- two -->
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <!-- three -->
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <!-- four -->
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <!-- five -->
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <!-- six -->
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="events">
      </div>
      <span id="noEvents" class="content-paragraph clearboth top32 bottom32">There are no upcoming events for this month.</span>
    </div>
  </div>
  <div class="extra"></div>
  <div class="extra"></div>
</div>

<?php require 'footer.php' ?>
