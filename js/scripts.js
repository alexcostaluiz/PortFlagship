/*
* ==========================================================================
* Name: scripts.js
* Author: Alexander Luiz Costa
* Description: Scripts file for PortFlagship webiste
* ==========================================================================
*/

/*
* ===============================================
* Global functions
* ===============================================
*/

function whichStartAnimationEvent() {
  var t,
  el = document.createElement("fakeelement")

  var animations = {
    "animation"      : "animationstart",
    "OAnimation"     : "oAnimationStart",
    "MozAnimation"   : "animationstart",
    "WebkitAnimation": "webkitAnimationStart"
  }

  for (t in animations){
    if (el.style[t] !== undefined){
      return animations[t]
    }
  }
}

function whichEndAnimationEvent() {
  var t,
  el = document.createElement("fakeelement")

  var animations = {
    "animation"      : "animationend",
    "OAnimation"     : "oAnimationEnd",
    "MozAnimation"   : "animationend",
    "WebkitAnimation": "webkitAnimationEnd"
  }

  for (t in animations){
    if (el.style[t] !== undefined){
      return animations[t]
    }
  }
}

function whichEndTransitionEvent() {
  var t,
  el = document.createElement("fakeelement")

  var transitions = {
    "transition"      : "transitionend",
    "OTransition"     : "oTransitionEnd",
    "MozTransition"   : "transitionend",
    "WebkitTransition": "webkitTransitionEnd"
  }

  for (t in transitions){
    if (el.style[t] !== undefined){
      return transitions[t]
    }
  }
}

function playVideo() {

  var popupVideo = document.createElement("iframe")
  popupVideo.src = "https://player.vimeo.com/video/18799809?autoplay=1"
  popupVideo.classList.add("popupVideo")
  popupVideo.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  popupVideo.width = "0px"
  popupVideo.height = "0px"
  popupVideo.setAttribute("allowfullscreen", "")
  popupVideo.setAttribute("webkitallowfullscreen", "")
  popupVideo.setAttribute("frameborder", "0")

  // create background element to close video
  var background = document.createElement("div")
  background.classList.add("popupBackground")
  background.onclick = function() {
    document.body.removeChild(popupVideo)
    document.body.removeChild(background)
  }

  // add elements to document
  document.body.appendChild(background)
  document.body.appendChild(popupVideo)

  // animate video
  window.setTimeout(function() {
    popupVideo.width = "66%"
    popupVideo.height = (window.innerWidth * .66 * 0.556) + "px"
    popupVideo.style.opacity = 1
    background.style.opacity = 0.5
  }, 10)

}

function scrollToTop() {
  if (window.scrollY > 310) {
		window.scrollBy(0, -50)
		window.scrollTimeout = window.setTimeout(scrollToTop, 1)
	}
	else clearTimeout(scrollTimeout);
}

/*
* ===============================================
* Document initialization function
* ===============================================
*/

function resizeDefault() {
  resizeLogo()

  var temp = drawer
  drawer = window.getComputedStyle(document.querySelector(".menu")).display !== "none"
  if (temp !== drawer) {
    if (drawer && !initDrawer) {
      initDrawerDropDown()
    }
    else if (!drawer && !initBar) {
      initNavDropDown()
    }
  }
}

function resizeLogo() {
  var logoFlagship = document.querySelector(".logoFlagship")
  var logoUGA = document.querySelector(".logoUGA")
  logoFlagship.style.height = (parseInt(window.getComputedStyle(logoFlagship).width) * 0.331412104) + "px"
  logoUGA.style.height = (parseInt(window.getComputedStyle(logoUGA).width) * 0.234693878) + "px"
}

function resizeSlider(first) {

  var calcWidth = window.innerWidth
  var currNavWidth = window.getComputedStyle(document.querySelector(".nav")).width

  if (window.matchMedia("(hover: none)").matches) {
    if (currNavWidth === navWidth && !first) {
      return
    }
    else {
      navWidth = currNavWidth
      calcWidth = parseInt(navWidth)
    }
  }

  var slider = document.querySelector(".slider")
  slider.style.height = (calcWidth * .45) + "px"

  var sliderTitle = document.querySelectorAll(".sliderTitle")
  var sliderTitleFontSize = ((calcWidth * .00438095) -  0.571429) + "rem"
  var sliderTitleMarginBottom = ((calcWidth * (4 / 175)) - (16/7)) + "px"
  var shadowPixels = ((calcWidth * (1 / 525)) + (1 / 7)) + "px "
  var sliderTitleTextShadow = shadowPixels + shadowPixels + "#323232"
  for (var i = 0; i < sliderTitle.length; i++) {
    sliderTitle[i].style.fontSize = sliderTitleFontSize
    sliderTitle[i].style.marginBottom = sliderTitleMarginBottom
    sliderTitle[i].style.textShadow = sliderTitleTextShadow
  }

  var sliderSubtitle = document.querySelectorAll(".sliderSubtitle")
  var sliderSubtitleFontSize = ((calcWidth * .00114286) + .285714) + "rem"
  for (var i = 0; i < sliderSubtitle.length; i++) {
    sliderSubtitle[i].style.fontSize = sliderSubtitleFontSize
  }

  var sliderItem = document.querySelectorAll(".sliderItem")
  var sliderItemMarginBottom = ((calcWidth * (2 / 35)) - (12 / 7)) + "px"
  for (var i = 0; i < sliderItem.length; i++) {
    sliderItem[i].style.marginBottom = sliderItemMarginBottom
  }

  var sliderArrow = document.querySelectorAll(".sliderArrow")
  var sliderArrowSize = ((calcWidth * (4 / 175)) + (40 / 7)) + "px"
  for (var i = 0; i < sliderArrow.length; i++) {
    sliderArrow[i].style.height = sliderArrowSize
    sliderArrow[i].style.width = sliderArrowSize
  }

  if (drawer) {
    document.getElementById("welcomeText").innerHTML = "The Portuguese Flagship Program (PFP) at the University of Georgia is the first and only of its kind. Intended for UGA undergraduate students with a unique commitment to reach the highest levels of Portuguese and to apply those skills in a professional context, the PFP offers an unprecedented opportunity for students to internationalize their academic experience. Participating students benefit from regular group or one-on-one tutorials, Skype partners in Brazil, support for immersion experiences both in the US and abroad, and a capstone year studying at UFSJ, a leading Brazilian university, with a semester long internship in Brazil. We encourage you to browse the site and contact us, or just visit us at the PFP office.<br><br>"
  }
  else {
    document.getElementById("welcomeText").innerHTML = "The Portuguese Flagship Program (PFP) at the University of Georgia is the first and only of its kind. Intended for UGA undergraduate students with a unique commitment to reach the highest levels of Portuguese and to apply those skills in a professional context, the PFP offers an unprecedented opportunity for students to internationalize their academic experience. For many it will also serve as a stepping-stone into an international career. More than a study abroad program, the PFP is structured to complement the student’s major area of study from the moment he or she arrives at UGA. Participating students also benefit from regular group or one-on-one tutorials, Skype partners in Brazil, support for immersion experiences both in the US and abroad, and a capstone year studying at UFSJ — a leading Brazilian university — with a semester long internship in Brazil. We encourage you to browse the site and contact us, or just visit us at the PFP office.<br><br>"
  }
}

function resizeImgSlider(first) {

  var calcWidth = window.innerWidth
  var currNavWidth = window.getComputedStyle(document.querySelector(".nav")).width

  if (window.matchMedia("(hover: none)").matches) {
    if (currNavWidth === navWidth && !first) {
      return
    }
    else {
      navWidth = currNavWidth
      calcWidth = parseInt(navWidth)
    }
  }

  var title = document.querySelector(".imgSliderItemTitle")
  var maxWidth = ((calcWidth * (125/1034)) + (35500/517)) + "px"
  title.style.fontSize = ((calcWidth * 0.00116054) + 0.759188) + "rem"
  title.style.maxWidth = maxWidth

  var subtitle = document.querySelector(".imgSliderItemSubtitle")
  subtitle.style.fontSize = ((calcWidth * 0.000676983) + 0.684526) + "rem"
  subtitle.style.maxWidth = maxWidth

  var image = document.querySelector(".imgSliderItemImg")
  image.style.width = ((calcWidth * (100/517)) + (30950/517)) + "px"
}

function resizeNewsContainer(first) {

  var calcWidth = window.innerWidth
  var currNavWidth = window.getComputedStyle(document.querySelector(".nav")).width

  if (window.matchMedia("(hover: none)").matches) {
    if (currNavWidth === navWidth && !first) {
      return
    }
    else {
      navWidth = currNavWidth
      calcWidth = parseInt(navWidth)
    }
  }

  var newsContainer = document.querySelectorAll(".news-container")
  var newsImage = document.querySelectorAll(".news-image")
  var newsHeight = ((calcWidth * (125/1034)) + (61350/517)) + "px"
  for (var i = 0; i < newsContainer.length; i++) {
    newsContainer[i].style.height = newsHeight
  }
  for (var i = 0; i < newsImage.length; i++) {
    newsImage[i].style.height = newsHeight
  }
}

window.addEventListener("load", function() {

  // declare global variables
  window.navWidth = window.getComputedStyle(document.querySelector(".nav")).width
  window.pageName = document.title.substr(22)
  window.initDrawer = false
  window.initBar = false
  window.drawer = window.getComputedStyle(document.querySelector(".menu")).display !== "none"
  window.animationStart = whichStartAnimationEvent()
  window.animationEnd = whichEndAnimationEvent()
  window.transitionEnd = whichEndTransitionEvent()

  // add event listeners
  resizeLogo()
  initNav()
  window.addEventListener("resize", resizeDefault)

  // initialize navigation bar or navigation drawer
  if (!drawer) {
    initNavDropDown()
  }
  else {
    initDrawerDropDown()
  }

  // page initialization
  if (pageName === "Home") {
    resizeSlider(true)
    window.addEventListener("resize", function() { resizeSlider(false) })
    initSlider()
    initStudentSlider()
  }
  else if (pageName === "News & Events") {
    initNews()
    resizeNewsContainer(true)
    window.addEventListener("resize", function() { resizeNewsContainer(false) })
    initEvents()
  }
  else if (pageName === "Why Portuguese?") {
    initImgSlider()
    resizeImgSlider(true)
    window.addEventListener("resize", function() { resizeImgSlider(false) })
  }
  else if (pageName === "Study Abroad") { initImmersionMore() }
  else if (pageName === "UFSJ") { initUfsjMore() }
})

/*
* ===============================================
* Navigation bar functions
* ===============================================
*/

function initNav() {

  // navigation data
  var navigation = new Vue({
    el: ".nav",
    data: {
      tabs: [
        {title: "Home", hovered: false, selected: false},
        {title: "The Program", hovered: false, selected: false, dropdown: [
          {title: 'Why Portuguese?', link: 'why.php'},
          {title: 'Study Abroad', link: 'program.php'},
          {title: 'Program Requirements', link: 'requirements.php'},
          {title: 'Financial Aid', link: 'aid.php'},
          {title: 'FAQ', link: 'faq.php'},
          {title: 'Faculty & Staff', link: 'staff.php'}
        ]},
        {title: "Partnerships", hovered: false, selected: false, dropdown: [
          {title: 'UFSJ', link: 'ufsj.php'},
          {title: 'K-12 Portuguese', link: 'k12.php'},
          {title: 'Internships', link: 'internships.php'}
        ]},
        {title: "Students", hovered: false, selected: false, dropdown: [
          {title: 'Student Testimonials', link: 'testimonials.php'},
          {title: '2019 Cohort', link: 'cohort2019.php'},
          {title: 'Alumni 2018', link: 'alumni2018.php'},
          {title: 'Alumni 2017', link: 'alumni2017.php'},
          {title: 'Alumni 2016', link: 'alumni2016.php'},
          {title: 'Alumni 2015', link: 'alumni2015.php'},
          {title: 'Alumni 2014', link: 'alumni2014.php'},
          {title: 'Alumni 2013', link: 'alumni2013.php'}
        ]},
        {title: "Apply", hovered: false, selected: false},
        {title: "News & Events", hovered: false, selected: false},
        {title: "Contact", hovered: false, selected: false}
      ]
    },
    methods: {
      mouseenter: function (index) {
        this.tabs[index].hovered = true
        switch (index) {
          case 1:
          programDrop.style.opacity = 1
          programDrop.style.height = programDropHeight
          break
          case 2:
          partnerDrop.style.opacity = 1
          partnerDrop.style.height = partnerDropHeight
          break
          case 3:
          studentDrop.style.opacity = 1
          studentDrop.style.height = studentDropHeight
          break
        }
      },
      mouseleave: function (index) {
        this.tabs[index].hovered = false
        switch (index) {
          case 1:
          programDrop.style.height = 0
          break
          case 2:
          partnerDrop.style.height = 0
          break
          case 3:
          studentDrop.style.height = 0
          break
        }
      }
    }
  })

  // set selected page when page is first loaded
  for (var i = 0; i < navigation.tabs.length; i++) {
    if (pageName === navigation.tabs[i].title) {
      navigation.tabs[i].selected = true
      break
    }
    else {
      if (navigation.tabs[i].dropdown != undefined) {
        for (var j = 0; j < navigation.tabs[i].dropdown.length; j++) {
          if (pageName === navigation.tabs[i].dropdown[j].title) {
            navigation.tabs[i].selected = true
            break
          }
        }
      }
    }
  }
}

function initNavDropDown() {
  initBar = true
  window.programDrop = document.getElementById('programDrop')
  window.partnerDrop = document.getElementById('partnerDrop')
  window.studentDrop = document.getElementById('studentDrop')
  window.programDropHeight = window.getComputedStyle(programDrop).height
  window.partnerDropHeight = window.getComputedStyle(partnerDrop).height
  window.studentDropHeight = window.getComputedStyle(studentDrop).height
  programDrop.style.height = 0
  programDrop.style.zIndex = 4
  partnerDrop.style.height = 0
  partnerDrop.style.zIndex = 4
  studentDrop.style.height = 0
  studentDrop.style.zIndex = 4

  // set event listeners for dropdown menus
  programDrop.addEventListener(transitionEnd, function(event) {
    if (event.target === programDrop) {
      if (programDrop.style.height === '0px') {
        programDrop.style.opacity = 0
      }
    }
  })
  partnerDrop.addEventListener(transitionEnd, function(event) {
    if (event.target === partnerDrop) {
      if (partnerDrop.style.height === '0px') {
        partnerDrop.style.opacity = 0
      }
    }
  })
  studentDrop.addEventListener(transitionEnd, function(event) {
    if (event.target === studentDrop) {
      if (studentDrop.style.height === '0px') {
        studentDrop.style.opacity = 0
      }
    }
  })
}

function initDrawerDropDown() {
  initDrawer = true
  window.drawerProgramDrop = document.getElementById("drawerProgramDrop")
  window.drawerPartnerDrop = document.getElementById("drawerPartnerDrop")
  window.drawerStudentDrop = document.getElementById("drawerStudentDrop")
  window.drawerProgramDropHeight = window.getComputedStyle(drawerProgramDrop).height
  window.drawerPartnerDropHeight = window.getComputedStyle(drawerPartnerDrop).height
  window.drawerStudentDropHeight = window.getComputedStyle(drawerStudentDrop).height
  drawerProgramDrop.style.height = 0
  drawerPartnerDrop.style.height = 0
  drawerStudentDrop.style.height = 0
}

function toggleDrawerItem(index) {

  if (index === 0) {
    // toggle program drop down
    if (drawerProgramDrop.style.height === "0px") {
      drawerProgramDrop.style.height = drawerProgramDropHeight
    }
    else {
      drawerProgramDrop.style.height = 0
    }
  }
  else if (index === 1) {
    // toggle partnerships drop down
    if (drawerPartnerDrop.style.height === "0px") {
      drawerPartnerDrop.style.height = drawerPartnerDropHeight
    }
    else {
      drawerPartnerDrop.style.height = 0
    }
  }
  else if (index === 2) {
    // toggle students drop down
    if (drawerStudentDrop.style.height === "0px") {
      drawerStudentDrop.style.height = drawerStudentDropHeight
    }
    else {
      drawerStudentDrop.style.height = 0
    }
  }
}

function showDrawer() {
  var drawer = document.querySelector(".drawer")
  drawer.style.transform = "translateX(0px)"

  var background = document.createElement("div")
  background.classList.add("popupBackground")
  background.onclick = function() {
    background.style.opacity = 0.0
    background.addEventListener(transitionEnd, function() {
      document.body.removeChild(background)
    })
    drawer.style.transform = "translateX(-100%)"
  }

  document.body.appendChild(background)

  window.setTimeout(function() {
    background.style.opacity = 0.5
  }, 1)
}

/*
* ===============================================
* Home page functions
* ===============================================
*/

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

function initSlider() {

  var slider = new Vue({
    el: ".slider",
    data: {
      loaded: false,
      length: 0,
      current: 0,
      title: "Get on board the Flagship",
      subtitle: "Do you want to study abroad and intern in Brazil? Click the image to watch our program video and see why you should be a part of the Portuguese Flagship program at UGA.",
      img: "http://www.portflagship.org/wp-content/uploads/2018/12/pfpvideo.png",
      link: "https://www.youtube.com/embed/FDUsdByHRf4",
      duration: "4:43",
      titleNext: "Summer 2018 in Florianópolis",
      subtitleNext: "UGA Flagship students enjoying an excursion to Santo Antônio de Lisboa while studying abroad in Florianópolis.",
      imgNext: "http://www.portflagship.org/wp-content/uploads/2018/06/Joaquina-Dunas-1.jpeg",
      linkNext: undefined,
      durationNext: undefined,
      enterUp: false,
      enterDown: false,
      exitUp: false,
      exitDown: false,
      enterNext: false,
      json: undefined,
      repeat: undefined
    },
    methods: {
      goToImg: function(type, index) {
        if (type === 0) {
          // left arrow was clicked
          this.enterNext = !this.enterNext
          this.exitUp = false
          this.enterUp = false
          this.exitDown = false
          this.enterDown = false
          window.clearInterval(this.repeat)
          slider.repeat = window.setInterval(function() { slider.goToImg(3, 0) }, 15000)

          if (this.current - 1 >= 0) {
            this.current = this.current - 1
          }
          else {
            this.current = this.length - 1
          }

          if (!this.enterNext) {
            this.title = this.json[this.current].title
            this.subtitle = this.json[this.current].subtitle
            this.img = this.json[this.current].imageURL
            this.link = this.json[this.current].link
            this.duration = this.json[this.current].duration
          }
          else {
            this.titleNext = this.json[this.current].title
            this.subtitleNext = this.json[this.current].subtitle
            this.imgNext = this.json[this.current].imageURL
            this.linkNext = this.json[this.current].link
            this.durationNext = this.json[this.current].duration
          }

          this.exitDown = true
          this.enterDown = true
        }
        else if (type === 1) {
          // right arrow was clicked
          this.enterNext = !this.enterNext
          this.exitUp = false
          this.enterUp = false
          this.exitDown = false
          this.enterDown = false
          window.clearInterval(this.repeat)
          slider.repeat = window.setInterval(function() { slider.goToImg(3, 0) }, 15000)

          if (this.current + 1 < this.length) {
            this.current = this.current + 1
          }
          else {
            this.current = 0
          }

          if (!this.enterNext) {
            this.title = this.json[this.current].title
            this.subtitle = this.json[this.current].subtitle
            this.img = this.json[this.current].imageURL
            this.link = this.json[this.current].link
            this.duration = this.json[this.current].duration
          }
          else {
            this.titleNext = this.json[this.current].title
            this.subtitleNext = this.json[this.current].subtitle
            this.imgNext = this.json[this.current].imageURL
            this.linkNext = this.json[this.current].link
            this.durationNext = this.json[this.current].duration
          }

          this.exitUp = true
          this.enterUp = true
        }
        else if (type === 2) {
          // indicator item was clicked
          this.enterNext = !this.enterNext
          this.exitUp = false
          this.enterUp = false
          this.exitDown = false
          this.enterDown = false
          window.clearInterval(this.repeat)
          slider.repeat = window.setInterval(function() { slider.goToImg(3, 0) }, 15000)

          if (index - 1 > this.current) {
            this.exitUp = true
            this.enterUp = true
          }
          else if (index - 1 < this.current) {
            this.exitDown = true
            this.enterDown = true
          }

          this.current = index - 1

          if (!this.enterNext) {
            this.title = this.json[this.current].title
            this.subtitle = this.json[this.current].subtitle
            this.img = this.json[this.current].imageURL
            this.link = this.json[this.current].link
            this.duration = this.json[this.current].duration
          }
          else {
            this.titleNext = this.json[this.current].title
            this.subtitleNext = this.json[this.current].subtitle
            this.imgNext = this.json[this.current].imageURL
            this.linkNext = this.json[this.current].link
            this.durationNext = this.json[this.current].duration
          }
        }
        else if (type === 3) {
          // automated switch
          this.enterNext = !this.enterNext
          this.exitUp = false
          this.enterUp = false
          this.exitDown = false
          this.enterDown = false

          if (this.current + 1 < this.length) {
            this.current = this.current + 1
          }
          else {
            this.current = 0
          }

          if (!this.enterNext) {
            this.title = this.json[this.current].title
            this.subtitle = this.json[this.current].subtitle
            this.img = this.json[this.current].imageURL
            this.link = this.json[this.current].link
            this.duration = this.json[this.current].duration
          }
          else {
            this.titleNext = this.json[this.current].title
            this.subtitleNext = this.json[this.current].subtitle
            this.imgNext = this.json[this.current].imageURL
            this.linkNext = this.json[this.current].link
            this.durationNext = this.json[this.current].duration
          }

          this.exitUp = true
          this.enterUp = true
        }
      },
      goToLink: function() {

        var link = undefined

        if (!this.enterNext) {
          link = this.link
        }
        else {
          link = this.linkNext
        }

        if (link === undefined) {
          // no link
        }
        else if (link.indexOf("youtube") !== -1 || link.indexOf("mp4") !== -1) {
          // popup video
          window.clearInterval(this.repeat)

          // create video element
          var popupVideo = document.createElement("iframe")
          popupVideo.src = link + "?autoplay=1"
          popupVideo.classList.add("popupVideo")
          popupVideo.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          popupVideo.width = "0px"
          popupVideo.height = "0px"
          popupVideo.setAttribute("allowfullscreen", "")
          popupVideo.setAttribute("webkitallowfullscreen", "")
          popupVideo.setAttribute("frameborder", "0")

          // create background element to close video
          var background = document.createElement("div")
          background.classList.add("popupBackground")
          background.onclick = function() {
            document.body.removeChild(popupVideo)
            document.body.removeChild(background)
            slider.repeat = window.setInterval(function() { slider.goToImg(3, 0) }, 15000)
          }

          // add elements to document
          document.body.appendChild(background)
          document.body.appendChild(popupVideo)

          // animate video
          window.setTimeout(function() {
            popupVideo.width = "66%"
            popupVideo.height = (window.innerWidth * .66 * 0.556) + "px"
            popupVideo.style.opacity = 1
            background.style.opacity = 0.5
          }, 1)

        }
        else {
          // external link
          if (link === "internships.php") {
            window.location.href = link
          }
          else {
            window.open(link, "_blank")
          }
        }
      }
    }
  })

  // get JSON
  var length = Object.keys(sliderData).length
  slider.length = length
  slider.json = sliderData

  // animate slider
  window.setTimeout(function() {
    slider.loaded = true
    slider.enterUp = true
    slider.repeat = window.setInterval(function() { slider.goToImg(3, 0) }, 15000)
  }, 10)
}

function initStudentSlider() {

  // get JSON child count
  var length = Object.keys(studentSliderData).length

  // initialize slider
  var random = new Array(length)
  for (var i = 0; i < length; i++) {
    random[i] = i
  }
  shuffleArray(random)
  var flex = document.getElementById("headshot-flex")
  var headshot = document.getElementById("headshot-container")
  var currIndex = 0

  var loadStudents = function(first) {
    for (var i = currIndex; i < currIndex + 3; i++) {
      var currData = studentSliderData[random[i]]
      var clone = headshot.cloneNode(true)
      clone.childNodes[1].childNodes[1].src = currData.imageURL
      clone.childNodes[3].textContent = currData.name
      clone.childNodes[5].textContent = currData.major
      clone.style.opacity = 1
      clone.style.margin = "16px 32px"
      if (drawer) {
        clone.style.margin = "16px"
      }
      clone.setAttribute("shown", true)
      flex.appendChild(clone)
    }

    if (!first) {
      var count = 0
      for (var i = 0; i < flex.childNodes.length; i++) {
        if (count === 3) {
          break
        }
        var current = flex.childNodes[i]
        if (current.style !== undefined) {
          if (current.getAttribute("shown")) {
            count++
            flex.removeChild(current)
            i--
          }
        }
      }
    }
  }

  loadStudents(true)

  flex.removeChild(headshot)

  var arrow = document.querySelectorAll(".student-arrow")
  arrow[0].onclick = function() {
    if (currIndex - 3 < 0) {
      currIndex = length - 3
    }
    else {
      currIndex -= 3
    }
    console.log(currIndex + " : " + length)
    loadStudents(false)
  }

  arrow[1].onclick = function() {
    if (currIndex + 3 > length - 3) {
      currIndex = 0
    }
    else {
      currIndex += 3
    }
    console.log(currIndex)
    loadStudents(false)
  }
}

/*
* ===============================================
* Image Slider functions
* ===============================================
*/

function initImgSlider() {

  // imgSlider Vue component
  var imgSlider = new Vue({
    el: ".imgSlider",
    data: {
      loaded: false,
      length: 0,
      current: 0,
      hovered: false,
      animate: false,
      title: "Niterói Contemporary Art Museum",
      subtitle: "Niterói, Rio de Janeiro, Brazil",
      img: "http://www.portflagship.org/wp-content/uploads/2018/11/museu_de_arte_contemporanea.png",
      exitLeft: false,
      exitRight: false,
      json: undefined,
      repeat: undefined
    },
    methods: {
      mouseenter: function () {
        this.hovered = true
      },
      mouseleave: function () {
        this.hovered = false
      },
      goToImg: function(type, index) {
        if (type === 0) {
          // left arrow was clicked
          window.clearInterval(this.repeat)
          imgSlider.repeat = window.setInterval(function() { imgSlider.goToImg(3, 0) }, 10000)

          if (this.current - 1 >= 0) {
            this.current = this.current - 1
          }
          else {
            this.current = this.length - 1
          }
          this.exitRight = true
        }
        else if (type === 1) {
          // right arrow was clicked
          window.clearInterval(this.repeat)
          imgSlider.repeat = window.setInterval(function() { imgSlider.goToImg(3, 0) }, 10000)

          if (this.current + 1 < this.length) {
            this.current = this.current + 1
          }
          else {
            this.current = 0
          }
          this.exitLeft = true
        }
        else if (type === 2) {
          // indicator item was clicked
          window.clearInterval(this.repeat)
          imgSlider.repeat = window.setInterval(function() { imgSlider.goToImg(3, 0) }, 10000)

          if (index - 1 > this.current) {
            this.exitLeft = true
          }
          else if (index - 1 < this.current) {
            this.exitRight = true
          }
          this.current = index - 1
        }
        else if (type === 3) {
          // automated switch
          if (this.current + 1 < this.length) {
            this.current = this.current + 1
          }
          else {
            this.current = 0
          }
          this.exitLeft = true
        }
      }
    }
  })

  // add animationEndEvent to imgSliderItem
  var imgSliderItem = document.getElementById("imgSliderItem")
  imgSliderItem.addEventListener(animationEnd, function(event) {
    if (event.target === imgSliderItem) {
      imgSlider.animate = false
      imgSlider.exitLeft = false
      imgSlider.exitRight = false
      imgSlider.title = imgSlider.json[imgSlider.current].title
      imgSlider.subtitle = imgSlider.json[imgSlider.current].subtitle
      imgSlider.img = imgSlider.json[imgSlider.current].imageURL
      window.setTimeout(function() {
        imgSlider.animate = true
      }, 1)
    }
  })

  // get JSON child count
  var length = Object.keys(imgSliderData).length
  imgSlider.length = length

  // animate imgSlider
  imgSlider.json = imgSliderData
  imgSlider.loaded = true
  imgSlider.animate = true
  imgSlider.repeat = window.setInterval(function() { imgSlider.goToImg(3, 0) }, 10000)

  if (window.matchMedia("(hover: none)").matches) {
    imgSlider.hovered = true
  }
}

/*
* ===============================================
* Study Abroad functions
* ===============================================
*/

function initImmersionMore() {
  window.addEventListener("resize", initImmersionMore)

  var clickText = document.querySelectorAll(".click-for-more")

  var isa = document.getElementById("isa")
  var isaClone = isa.cloneNode(true)
  isaClone.style.height = "auto"
  isaClone.style.opacity = 0
  isa.parentElement.appendChild(isaClone)
  window.isaHeight = window.getComputedStyle(isaClone).height
  isa.parentElement.removeChild(isaClone)

  if (clickText[0].textContent.indexOf("less") === -1) {
    isa.style.height = "0px"
  }
  else {
    isa.style.height = isaHeight
  }

  var middlebury = document.getElementById("middlebury")
  var middleburyClone = middlebury.cloneNode(true)
  middleburyClone.style.height = "auto"
  middleburyClone.style.opacity = 0
  middlebury.parentElement.appendChild(middleburyClone)
  window.middleburyHeight = window.getComputedStyle(middleburyClone).height
  middlebury.parentElement.removeChild(middleburyClone)

  if (clickText[1].textContent.indexOf("less") === -1) {
    middlebury.style.height = "0px"
  }
  else {
    middlebury.style.height = middleburyHeight
  }
}

function immersionMore(id) {
  var clickText = document.querySelectorAll(".click-for-more")

  if (id === "isa") {
    var isa = document.getElementById("isa")
    if (isa.style.height === "0px") {
      isa.style.height = isaHeight
      clickText[0].textContent = "Click title for less"
    }
    else {
      isa.style.height = "0px"
      clickText[0].textContent = "Click title for more"
    }
  }
  else if (id === "middlebury") {
    var middlebury = document.getElementById("middlebury")
    if (middlebury.style.height === "0px") {
      middlebury.style.height = middleburyHeight
      clickText[1].textContent = "Click title for less"
    }
    else {
      middlebury.style.height = "0px"
      clickText[1].textContent = "Click title for more"
    }
  }
}

/*
* ===============================================
* News & Events functions
* ===============================================
*/

function initNews() {

  // get required DOM elements
  var container = document.getElementById("news")
  var sample = document.getElementById("sample")
  var newsCards = document.querySelectorAll(".news-container")


  // add cursror events to DOM elements
  for (var i = 0; i < newsCards.length; i++) {
    var current = newsCards[i]
    current.addEventListener("mouseover", function(event) {
      event.currentTarget.childNodes[1].childNodes[1].childNodes[1].style.transform = "scale(1.1)"
    })
    current.addEventListener("mouseout", function(event) {
      event.currentTarget.childNodes[1].childNodes[1].childNodes[1].style.transform = "scale(1.0)"
    })
    current.addEventListener("click", function(event) {
      var currURL = window.location.href
      var newURL = ""
      if (currURL.indexOf("page") !== -1) {
        newURL = currURL.substr(0, currURL.length - 7) + "?post=" + event.currentTarget.id
      }
      else {
        newURL = currURL + "?post=" + event.currentTarget.id
      }
      window.location.href = newURL
    })
  }

  // create page selector
  window. pageNumber = document.querySelectorAll(".page-number")

  for (var i = 1; i <= pageNumber.length; i++) {
    var current = pageNumber[i - 1]

    current.textContent = i

    if (i === pageID) {
      current.style.borderBottom = "5px solid #ffc906"
    }

    current.addEventListener("click", function(event) {
      var currURL = window.location.href
      var newURL = ""
      if (currURL.indexOf("page") !== -1) {
        newURL = currURL.substr(0, currURL.length - 7) + "?page=" + event.currentTarget.textContent
      }
      else {
        newURL = currURL + "?page=" + event.currentTarget.textContent
      }
      window.location.href = newURL
    })
  }
}

function initEvents() {

  var length = Object.keys(eventsData).length
  window.eventDates = []

  if (length > 0) {
    for (var i = 0; i < length; i++) {
      eventDates.push(eventsData[i].date)
    }
  }

  initCalendar()
}

function initCalendar() {
  var today = new Date()
  window.currentYear = today.getFullYear()
  window.currentMonth = today.getMonth() + 1
  window.month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  window.oddMonth = [2, 4, 6, 9, 11]
  fillCalendar()
}

function goToMonth(forward) {
  if (forward) {
    if (currentMonth < 12) {
      currentMonth++
    }
    else {
      currentMonth = 1
      currentYear++
    }
  }
  else {
    if (currentMonth > 1) {
      currentMonth--
    }
    else {
      currentMonth = 12
      currentYear--
    }
  }
  fillCalendar()
}

function fillCalendar() {
  var title = document.querySelector(".calendar span")
  title.textContent = month[currentMonth - 1] + " " + currentYear
  var days = document.querySelectorAll(".calendar table td")
  var countBefore = 31
  var lastMonth = currentMonth - 1
  if (currentMonth === 1) {
    lastMonth = 12
  }
  if (oddMonth.indexOf(lastMonth) !== -1) {
    if (lastMonth === 2) {
      countBefore = (isLeapYear(currentYear)) ? 29 : 28
    }
    else countBefore = 30
  }
  var count = 1
  var countAfter = 1
  var firstDay = dayOfWeek(currentYear, currentMonth, 1)

  for (var i = firstDay - 1; i >= 0; i--) {
    days[i].textContent = countBefore--
    days[i].style.color = "#c3c3c3"
  }

  var februaryLength = (isLeapYear(currentYear)) ? 30 : 29

  window.currentEvents = {}
  for (var i = 0; i < eventDates.length; i++) {
    var date = eventDates[i]
    var m = parseInt(date.substr(0, 2))
    var d = parseInt(date.substr(3, 5))
    var y = parseInt(date.substr(6))
    if (y === currentYear) {
      if (m === currentMonth) {
        currentEvents[d] = i
      }
    }
  }

  var eventsContainer = document.getElementById("events")
  while (eventsContainer.firstChild) {
    eventsContainer.removeChild(eventsContainer.firstChild);
  }
  document.getElementById("noEvents").style.display = ""

  for (var i = firstDay; i < days.length; i++) {

    days[i].style.cursor = "default"
    days[i].style.color = "#222"
    days[i].style.fontWeight = ""
    days[i].onclick = undefined

    if (currentEvents[count] !== undefined) {
      days[i].innerHTML = "<div>" + count++ + "</div>"
      days[i].style.cursor = "pointer"
      days[i].onclick = function() {
        openEvent(this.textContent)
      }

      createEvent(count - 1)
    }
    else {
      days[i].innerHTML = count++
    }

    if (count > februaryLength) {
      if (oddMonth.indexOf(currentMonth) !== -1) {
        if (currentMonth === 2) {
          days[i].textContent = countAfter++
          days[i].style.color = "#c3c3c3"
        }
        else if (count > 31) {
          days[i].textContent = countAfter++
          days[i].style.color = "#c3c3c3"
        }
      }
      else if (count > 32) {
        days[i].textContent = countAfter++
        days[i].style.color = "#c3c3c3"
      }
    }
  }
}

function openEvent(day) {
  var popup = document.createElement("div")
  popup.classList.add("event-popup")

  var popupIcon = document.createElement("img")
  popupIcon.src = "assets/calendar.svg"
  popupIcon.classList.add("event-popup-icon")

  var popupDate = document.createElement("span")
  popupDate.classList.add("event-popup-date")
  popupDate.textContent = day

  var popupTitle = document.createElement("span")
  popupTitle.classList.add("event-popup-title")
  popupTitle.classList.add("clearboth")
  popupTitle.textContent = eventsData[currentEvents[day]].title

  var popupTextContainer = document.createElement("div")
  popupTextContainer.classList.add("event-popup-text-container")

  var popupHeaderDate = document.createElement("span")
  popupHeaderDate.classList.add("event-popup-header")
  popupHeaderDate.classList.add("clearboth")
  popupHeaderDate.textContent = "Date"

  var popupHeaderTime = document.createElement("span")
  popupHeaderTime.classList.add("event-popup-header")
  popupHeaderTime.classList.add("clearboth")
  popupHeaderTime.textContent = "Time"

  var popupHeaderDesc = document.createElement("span")
  popupHeaderDesc.classList.add("event-popup-header")
  popupHeaderDesc.classList.add("clearboth")
  popupHeaderDesc.textContent = "Description"

  var popupTextDate = document.createElement("span")
  popupTextDate.classList.add("event-popup-text")
  popupTextDate.classList.add("clearboth")
  popupTextDate.textContent = eventsData[currentEvents[day]].date

  var popupTextTime = document.createElement("span")
  popupTextTime.classList.add("event-popup-text")
  popupTextTime.classList.add("clearboth")
  popupTextTime.textContent = eventsData[currentEvents[day]].time

  var popupTextDesc = document.createElement("span")
  popupTextDesc.classList.add("event-popup-text")
  popupTextDesc.classList.add("clearboth")
  popupTextDesc.textContent = eventsData[currentEvents[day]].description

  popupTextContainer.appendChild(popupHeaderDate)
  popupTextContainer.appendChild(popupTextDate)
  popupTextContainer.appendChild(popupHeaderTime)
  popupTextContainer.appendChild(popupTextTime)
  popupTextContainer.appendChild(popupHeaderDesc)
  popupTextContainer.appendChild(popupTextDesc)

  popup.appendChild(popupIcon)
  popup.appendChild(popupDate)
  popup.appendChild(popupTitle)
  popup.appendChild(popupTextContainer)

  var background = document.createElement("div")
  background.classList.add("popupBackground")
  background.onclick = function() {
    document.body.removeChild(popup)
    document.body.removeChild(background)
  }

  document.body.appendChild(background)
  document.body.appendChild(popup)

  window.setTimeout(function() {
    popup.style.opacity = 1
    background.style.opacity = 0.5
  }, 10)
}

function createEvent(day) {
  var eventsContainer = document.getElementById("events")
  document.getElementById("noEvents").style.display = "none"

  var newEvent = document.createElement("div")
  newEvent.classList.add("event-container")
  newEvent.onclick = function() {
    openEvent(day)
  }

  var newEventIcon = document.createElement("img")
  newEventIcon.src = "assets/calendar.svg"
  newEventIcon.classList.add("event-icon")

  var newEventDate = document.createElement("span")
  newEventDate.textContent = day
  newEventDate.classList.add("event-date")

  var newEventTextContainer = document.createElement("div")
  newEventTextContainer.classList.add("event-text-container")

  var newEventTitle = document.createElement("span")
  newEventTitle.textContent = eventsData[currentEvents[day]].title
  newEventTitle.classList.add("event-title")
  newEventTitle.classList.add("clearboth")

  var newEventDescription = document.createElement("span")
  newEventDescription.textContent = eventsData[currentEvents[day]].description + " Click for more information."
  newEventDescription.classList.add("event-description")
  newEventDescription.classList.add("clearboth")

  newEventTextContainer.appendChild(newEventTitle)
  newEventTextContainer.appendChild(newEventDescription)

  newEvent.appendChild(newEventIcon)
  newEvent.appendChild(newEventDate)
  newEvent.appendChild(newEventTextContainer)

  eventsContainer.appendChild(newEvent)
}

function dayOfWeek(y, m, d) {
  var t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4]
  y -= m < 3
  return (y + Math.floor(y/4) - Math.floor(y/100) + Math.floor(y/400) + t[m-1] + d) % 7
}

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0 ) {
      if (year % 400 === 0) {
        return true
      }
      else return false
    }
    else return true
  }
  else return false
}

/*
* ===============================================
* UFSJ functions
* ===============================================
*/

function initUfsjMore() {
  window.addEventListener("resize", initUfsjMore)

  var more = document.getElementById("more")
  var expand = document.getElementById("expand")
  var clone = expand.cloneNode(true)
  clone.style.height = "auto"
  clone.style.opacity = 0
  clone.style.position = "absolute"
  expand.parentElement.appendChild(clone)
  window.ufsjMoreHeight = window.getComputedStyle(clone).height
  expand.parentElement.removeChild(clone)

  if (more.textContent === "More") {
    expand.style.height = "0px"
  }
  else {
    expand.style.height = ufsjMoreHeight
  }
}

function ufsjMore() {
  var expand = document.getElementById("expand")
  var more = document.getElementById("more")
  var arrow = document.getElementById("more-arrow")
  if (expand.style.height === "0px") {
    expand.style.height = ufsjMoreHeight
    more.textContent = "Less"
    arrow.setAttribute("style", "transform: rotate(180deg)")
  }
  else {
    expand.style.height = "0px"
    more.textContent = "More"
    arrow.setAttribute("style", "transform: rotate(0deg)")
  }
}

/*
* ===============================================
* Contact Form functions
* ===============================================
*/

function validateContactForm() {
  if (grecaptcha.getResponse() === "") {
    alert("Please complete the reCAPTCHA")
    return false
  }
  return true
}

/*
* ===============================================
* Footer functions
* ===============================================
*/

function loadJS(url, code) {
  var script = document.createElement("script")
  document.head.appendChild(script)
  script.onload = code
  script.onreadystatechange = code
  script.src = url
}

function onClickEnable() {
  var map = document.getElementById("map")
  map.style.height = window.getComputedStyle(map).height
  document.getElementById("enable").style.display = "none"
  loadJS("https://maps.googleapis.com/maps/api/js?key=AIzaSyASyYLHa0y6PEhbnULDcZwHWve-P77ZVYk", initMap)
}

function initMap() {
  var loc = {lat: 33.9556157, lng: -83.3804178}

  var map = new google.maps.Map(document.getElementById("map"), {
    center: loc,
    zoom: 15
  })

  var marker = new google.maps.Marker({position: loc, map: map})
}
