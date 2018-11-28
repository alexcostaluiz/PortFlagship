/*
* ==========================================================================
* Name: scripts.js
* Author: Alexander Luiz Costa
* Description: Scripts file for PortFlagship webiste
* ==========================================================================
*/

/*
* ===============================================
* Document initialization function
* ===============================================
*/

$(document).ready(function() {

  // initialize navigation bar
  $(".nav li").data("Selected", false);

  var pageName = document.title.substr(22);

  if (pageName === "Why Portuguese?") {
    initImgSlider();
  }

  if (pageName === "Financial Aid") {
    initImgAnim();
  }

  initNav(pageName);
  initFooter();

});

/*
* ===============================================
* Image Slider functions
* ===============================================
*/

function whichStartAnimationEvent() {
  var t,
  el = document.createElement("fakeelement");

  var animations = {
    "animation"      : "animationstart",
    "OAnimation"     : "oAnimationStart",
    "MozAnimation"   : "animationstart",
    "WebkitAnimation": "webkitAnimationStart"
  }

  for (t in animations){
    if (el.style[t] !== undefined){
      return animations[t];
    }
  }
}

function whichEndAnimationEvent() {
  var t,
  el = document.createElement("fakeelement");

  var animations = {
    "animation"      : "animationend",
    "OAnimation"     : "oAnimationEnd",
    "MozAnimation"   : "animationend",
    "WebkitAnimation": "webkitAnimationEnd"
  }

  for (t in animations){
    if (el.style[t] !== undefined){
      return animations[t];
    }
  }
}

function animateSliderItem($sliderItem, data, index) {
  var animationStartEvent = whichStartAnimationEvent();
  var animationEndEvent = whichEndAnimationEvent();

  var $slider = $(".imgSlider");

  var $sliderItemImgHolder = $(".imgSliderItemImgHolder", $sliderItem);
  var $sliderItemImg = $(".imgSliderItemImg", $sliderItem);
  var $sliderItemTitle = $(".imgSliderItemTitle", $sliderItem);
  var $sliderItemSubtitle = $(".imgSliderItemSubtitle", $sliderItem);
  var $sliderItemDivider = $(".imgSliderItemTextDivider", $sliderItem);

  $sliderItemTitle.text("");
  $sliderItemTitle.append(data[index.toString()].title.join("<br>"));
  $sliderItemSubtitle.text(data[index.toString()].subtitle);
  $sliderItemImg.attr("src", data[index.toString()].imageURL);

  $sliderItemImgHolder.css("transform", "");
  $sliderItemImgHolder.css("opacity", "");
  $sliderItemImgHolder.addClass("imgSliderItemImgHolderAnim");
  $sliderItemImgHolder.one(animationEndEvent, function() {
    $sliderItemImgHolder.css("opacity", 1);
    $sliderItemImgHolder.css("transform", "translateY(0px)");
    $sliderItemImgHolder.removeClass("imgSliderItemImgHolderAnim");
  });

  $sliderItemImg.one(animationStartEvent, function() {
    $sliderItemImgHolder.addClass("imgSliderItemImgHolderAnim2");
    $sliderItemImgHolder.one(animationEndEvent, function() {
      $sliderItemImgHolder.css("transform", "translate(8px, -8px)");
      $sliderItemImgHolder.removeClass("imgSliderItemImgHolderAnim2");
    });
  });
  $sliderItemImg.css("transform", "");
  $sliderItemImg.addClass("imgSliderItemImgAnim");
  $sliderItemImg.one(animationEndEvent, function() {
    $sliderItemImg.css("transform", "translate(-16px, 16px)");
    $sliderItemImg.removeClass("imgSliderItemImgAnim");
    $(".slider-arrow", $slider).data("Enabled", true);
  });

  $sliderItemTitle.css("transform", "");
  $sliderItemTitle.css("opacity", "");
  $sliderItemTitle.addClass("imgSliderItemTitleAnim");
  $sliderItemTitle.one(animationEndEvent, function() {
    $sliderItemTitle.css("opacity", 1);
    $sliderItemTitle.css("transform", "translateY(0px)");
    $sliderItemTitle.removeClass("imgSliderItemTitleAnim");
  });

  $sliderItemDivider.css("transform", "");
  $sliderItemDivider.css("opacity", "");
  $sliderItemDivider.addClass("imgSliderItemTextDividerAnim");
  $sliderItemDivider.one(animationEndEvent, function() {
    $sliderItemDivider.css("opacity", 1);
    $sliderItemDivider.css("transform", "translateX(0px)");
    $sliderItemDivider.removeClass("imgSliderItemTextDividerAnim");
  });

  $sliderItemSubtitle.css("transform", "");
  $sliderItemSubtitle.css("opacity", "");
  $sliderItemSubtitle.addClass("imgSliderItemSubtitleAnim");
  $sliderItemSubtitle.one(animationEndEvent, function() {
    $sliderItemSubtitle.css("opacity", 1);
    $sliderItemSubtitle.css("transform", "translateY(0px)");
    $sliderItemSubtitle.removeClass("imgSliderItemSubtitleAnim");
  });
}

function nextImg($slider, $sliderItem, animationEndEvent, data) {

  if (!$(".slider-arrow", $slider).data("Enabled")) {
    return;
  }
  else {
    $(".slider-arrow", $slider).data("Enabled", false);
  }

  var curr = $slider.data("i");
  if (curr < Object.keys(data).length - 1) {
    $slider.data("i", curr + 1);
  }
  else {
    $slider.data("i", 0);
  }
  curr = $slider.data("i");

  $sliderItem.addClass("imgSliderItemAnimLeft");
  $sliderItem.one(animationEndEvent, function() {
    $sliderItem.removeClass("imgSliderItemAnimLeft");
    animateSliderItem($sliderItem, data, curr);
  });
  $(".imgSliderIndicatorItem").each(function() {
    $(this).removeClass("imgSliderIndicatorItemSelected");
    if ($(this).data("position") === curr) {
      $(this).addClass("imgSliderIndicatorItemSelected");
    }
  });
}

function goToImg($slider, $sliderItem, animationEndEvent, data, pos) {

  var curr = $slider.data("i");
  if (pos === curr) {
    return;
  }

  if (!$(".slider-arrow", $slider).data("Enabled")) {
    return;
  }
  else {
    $(".slider-arrow", $slider).data("Enabled", false);
  }

  $slider.data("i", pos);
  if (pos > curr) {
    $sliderItem.addClass("imgSliderItemAnimLeft");
    $sliderItem.one(animationEndEvent, function() {
      $sliderItem.removeClass("imgSliderItemAnimLeft");
      animateSliderItem($sliderItem, data, pos);
    });
  }
  else {
    $sliderItem.addClass("imgSliderItemAnimRight");
    $sliderItem.one(animationEndEvent, function() {
      $sliderItem.removeClass("imgSliderItemAnimRight");
      animateSliderItem($sliderItem, data, pos);
    });
  }

  $(".imgSliderIndicatorItem").each(function() {
    $(this).removeClass("imgSliderIndicatorItemSelected");
    if ($(this).data("position") === pos) {
      $(this).addClass("imgSliderIndicatorItemSelected");
    }
  });
}

function initImgSlider() {

  var animationStartEvent = whichStartAnimationEvent();
  var animationEndEvent = whichEndAnimationEvent();

  var $slider = $(".imgSlider");
  $slider.data("i", 0);

  $.getJSON("https://api.jsonbin.io/b/5bf69ee7746e9b593ec17162/2", function(data) {
    var length = Object.keys(data).length;
    if (length > 0) {

      // get slider item variable
      var $sliderItem = $(".imgSliderItem", $slider);

      // show elements and hide load gif
      $(".loading", $slider).animate({opacity: "0.0"}, 300, function() {
        $(this).addClass("hide");
        // animate slider for the first time
        animateSliderItem($sliderItem, data, 0);
      });

      // fill slider indicator
      for (i = 0; i < length; i++) {
        var $indicator = $(".imgSliderIndicator");
        var $indicatorItem = $("<div></div>").addClass("imgSliderIndicatorItem");
        $indicatorItem.data("position", i);
        if (i === 0) {
          $indicatorItem.addClass("imgSliderIndicatorItemSelected");
        }
        $indicator.append($indicatorItem);
      }

      // create automatic slide loop
      $(".slider-arrow", $slider).data("Enabled", false);
      setInterval(function(){nextImg($slider, $sliderItem, animationEndEvent, data);}, 10000);

      // create click event for left arrow
      $(".aleft", $slider).click(function() {
        if (!$(".slider-arrow", $slider).data("Enabled")) {
          return;
        }
        else {
          $(".slider-arrow", $slider).data("Enabled", false);
        }

        var curr = $slider.data("i");
        if (curr > 0) {
          $slider.data("i", curr - 1);
        }
        else {
          $slider.data("i", length - 1);
        }
        curr = $slider.data("i");

        $sliderItem.addClass("imgSliderItemAnimRight");
        $sliderItem.one(animationEndEvent, function() {
          $sliderItem.removeClass("imgSliderItemAnimRight");
          animateSliderItem($sliderItem, data, curr);
        });
        $(".imgSliderIndicatorItem").each(function() {
          $(this).removeClass("imgSliderIndicatorItemSelected");
          if ($(this).data("position") === curr) {
            $(this).addClass("imgSliderIndicatorItemSelected");
          }
        });
      });

      // create click event for right arrow
      $(".aright", $slider).click(function() {
        if (!$(".slider-arrow", $slider).data("Enabled")) {
          return;
        }
        else {
          $(".slider-arrow", $slider).data("Enabled", false);
        }

        var curr = $slider.data("i");
        if (curr < length - 1) {
          $slider.data("i", curr + 1);
        }
        else {
          $slider.data("i", 0);
        }
        curr = $slider.data("i");

        $sliderItem.addClass("imgSliderItemAnimLeft");
        $sliderItem.one(animationEndEvent, function() {
          $sliderItem.removeClass("imgSliderItemAnimLeft");
          animateSliderItem($sliderItem, data, curr);
        });
        $(".imgSliderIndicatorItem").each(function() {
          $(this).removeClass("imgSliderIndicatorItemSelected");
          if ($(this).data("position") === curr) {
            $(this).addClass("imgSliderIndicatorItemSelected");
          }
        });
      });

      /*// automatic arrow and indicator animation to notify user of its existence
      $(".aleft", $slider).addClass("aleft-animate");
      $(".aright", $slider).addClass("aright-animate");
      $(".imgSliderIndicator").stop().animate({opacity: "1.0"}, 300);
      $(".slider-arrow", $slider).stop().animate({opacity: "1.0"}, 300, function() {
        setTimeout(function () {
          $(".aleft", $slider).removeClass("aleft-animate");
          $(".aright", $slider).removeClass("aright-animate");
          $(".imgSliderIndicator").stop().animate({opacity: "0.0"}, 500);
          $(".slider-arrow").stop().animate({opacity: "0.0"}, 500);
        }, 1000);
      });*/

      // create slider hover event to show arrows and indicator
      $slider.hover(
        function() {
          $(".imgSliderIndicator").stop().animate({opacity: "1.0"}, 300);
          $(".slider-arrow", $slider).stop().animate({opacity: "1.0"}, 300);
          $(".aleft", $slider).addClass("aleft-animate");
          $(".aright", $slider).addClass("aright-animate");
        },
        function() {
          $(".imgSliderIndicator").stop().animate({opacity: "0.0"}, 500);
          $(".slider-arrow", $slider).stop().animate({opacity: "0.0"}, 500);
          $(".aleft", $slider).removeClass("aleft-animate");
          $(".aright", $slider).removeClass("aright-animate");
        }
      );

      $(".imgSliderIndicator").hover(
        function() {
          $(".imgSliderIndicator").stop().animate({opacity: "1.0"}, 300);
          $(".slider-arrow", $slider).stop().animate({opacity: "1.0"}, 300);
        },
        function() {
          $(".imgSliderIndicator").stop().animate({opacity: "0.0"}, 500);
          $(".slider-arrow", $slider).stop().animate({opacity: "0.0"}, 500);
        }
      );

      // create indicator item click event
      $(".imgSliderIndicatorItem").click(function() {
        goToImg($slider, $sliderItem, animationEndEvent, data, $(this).data("position"));
      });
    }
  });
}

function initImgAnim() {
  var animationStartEvent = whichStartAnimationEvent();
  var $holder = $(".imgSliderItemImgHolder");
  var $img = $(".imgSliderItemImg");

  $img.one(animationStartEvent, function() {
    $holder.removeClass("imgSliderItemImgHolderAnim");
    $holder.addClass("imgSliderItemImgHolderAnim2");
  });
}

/*
* ===============================================
* Navigation bar functions
* ===============================================
*/

function initNav(pageName) {
  $(".nav").children().each(function() {
    var names = [];
    names.push($("a", $(this)).contents().get(0).nodeValue);
    if ($(this).children().length > 2) {
      $("ul a li", $(this)).each(function() {
        names.push($(this).text());
      });
    }
    if (names.indexOf(pageName) != -1) {
      $(this).data("Selected", true);
      $("div.indicator", $(this)).stop().animate({width: "80%"}, 150);
      return;
    }
  });

  $(".nav li").hover(
    function() {
      $("div.indicator", this).stop(true).animate({width: "80%"}, 150);
      $("ul", this).stop().slideDown(150);
    },
    function() {
      $("ul", this).stop().slideUp(150);
      if ($(this).data("Selected") === false) {
        $("div.indicator", this).animate({width: "0%"}, 150);
      }
    }
  );

  $(".nav li").click(
    function() {
      var $clickedIndicator = $("div.indicator", this);
      $(".nav li").data("Selected", false);
      $(this).data("Selected", true);
      $(".nav li div.indicator").each(function() {
        if (!$(this).is($clickedIndicator)) {
          $(this).stop().animate({width: "0%"}, 150);
        }
      })
      $clickedIndicator.stop().animate({width: "80%"}, 150);
    }
  );

  $(".nav li ul a li").hover(
    function() {
      $(this).stop(true).animate({backgroundColor: "#323232", color: "white"}, 150);
    },
    function() {
      $(this).animate({backgroundColor: "#e3e3e3", color: "#222"}, 150);
    }
  );

  $(".nav li ul a li").click(
    function() {
      var $parent = $(this).parent().parent().parent();
      var $clickedIndicator = $("div.indicator", $parent);
      $(".nav li").data("Selected", false);
      $parent.data("Selected", true);
      $(".nav li div.indicator").each(function() {
        if (!$(this).is($clickedIndicator)) {
          $(this).stop().animate({width: "0%"}, 150);
        }
      })
      $clickedIndicator.stop().animate({width: "80%"}, 150);
    }
  );
}

/*
* ===============================================
* Footer functions
* ===============================================
*/

function loadJS(url, code) {
  var script = document.createElement('script');
  document.head.appendChild(script);
  script.onload = code;
  script.onreadystatechange = code;
  script.src = url;
}

function initFooter() {
  $map = $("#map");
  $enable = $("#enable");
  $enable.click(function() {
    $enable.hide();
    loadJS("https://maps.googleapis.com/maps/api/js?key=AIzaSyBmLRdxEqN-OH4gufW70pwXNiDmi9eMkps", initMap);
  });
}

function initMap() {
  var loc = {lat: 33.9556157, lng: -83.3804178};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: loc,
    zoom: 15
  });

  var marker = new google.maps.Marker({position: loc, map: map});
}
