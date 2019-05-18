<?php $pageTitle = "Post" ?>
<?php require 'header.php' ?>

<div class="container light-grey">
  <div class="extra"></div>
  <div class="row pad64 padNoBottom bottom32">
    <span class="content-title clearboth"><?php echo $newsDataArray[$postID]['title'] ?></span>
  </div>
  <div id="postDivider" class="divider-container bottom32">
    <span class="section">§</span>
    <div class="divider"></div>
    <span class="section mirror">§</span>
  </div>
  <div class="extra"></div>
  <div class="row-flex bottom64">
    <img id="postImage" class="image-border" style="max-width: 450px" src="<?php echo $newsDataArray[$postID]['imageURL'] ?>" width="80%" alt="">
  </div>
  <div class="row-flex bottom64">
    <div id="postContent" class="eight columns">
      <?php echo $newsDataArray[$postID]['content'] ?>
    </div>
  </div>
</div>

<?php require 'footer.php' ?>
