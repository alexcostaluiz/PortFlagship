<?php
  $newsData = file_get_contents("assets/news.json");
  $newsDataArray = json_decode($newsData, true);
  $newsDataLength = count($newsDataArray);

  $eventsData = file_get_contents("assets/events.json");

  if (isset($_GET['post'])) {
    $postID = $_GET['post'];
    require 'post.php';
  }
  else {
    $pageID = 1;
    if (isset($_GET['page'])) {
      $pageID = $_GET['page'];
    }
    $postRange = $newsDataLength - ((($pageID - 1) * 5) + 1);
    $pageCount = ceil($newsDataLength / 5);
    require 'newsdefault.php';
  }
?>

<script type="text/javascript">
  window.eventsData = <?php echo $eventsData ?>
</script>
