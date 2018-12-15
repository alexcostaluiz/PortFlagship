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

/*
* ===============================================
* Document initialization function
* ===============================================
*/

window.addEventListener('load', function() {

  var pageName = document.title.substr(22)

  // declare global variables
  window.animationStart = whichStartAnimationEvent()
  window.animationEnd = whichEndAnimationEvent()
  window.transitionEnd = whichEndTransitionEvent()

  // get dropdown heights
  initNav()
  window.programDrop = document.getElementById('programDrop')
  window.partnerDrop = document.getElementById('partnerDrop')
  window.studentDrop = document.getElementById('studentDrop')
  window.programDropHeight = window.getComputedStyle(programDrop).height
  window.partnerDropHeight = window.getComputedStyle(partnerDrop).height
  window.studentDropHeight = window.getComputedStyle(studentDrop).height
  programDrop.style.height = 0
  programDrop.style.zIndex = 2
  partnerDrop.style.height = 0
  partnerDrop.style.zIndex = 2
  studentDrop.style.height = 0
  studentDrop.style.zIndex = 2

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

  // initialization
  if (pageName === "Home") {
    initSlider()
    initStudentSlider()
  }
  if (pageName === "Why Portuguese?") { initImgSlider() }
  if (pageName === "UFSJ") { initUfsjMore() }
})

/*
* ===============================================
* Navigation bar functions
* ===============================================
*/

function initNav() {

  var pageName = document.title.substring(22)

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

/*
* ===============================================
* Home page functions
* ===============================================
*/

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
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
      titleNext: "Summer 2018 in Florianópolis",
      subtitleNext: "UGA Flagship students enjoying an excursion to Santo Antônio de Lisboa while studying abroad in Florianópolis.",
      imgNext: "http://www.portflagship.org/wp-content/uploads/2018/06/Joaquina-Dunas-1.jpeg",
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
          //window.clearInterval(this.repeat)
          //slider.repeat = window.setInterval(function() { slider.goToImg(3, 0) }, 20000)

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
          }
          else {
            this.titleNext = this.json[this.current].title
            this.subtitleNext = this.json[this.current].subtitle
            this.imgNext = this.json[this.current].imageURL
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
          //window.clearInterval(this.repeat)
          //slider.repeat = window.setInterval(function() { slider.goToImg(3, 0) }, 20000)

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
          }
          else {
            this.titleNext = this.json[this.current].title
            this.subtitleNext = this.json[this.current].subtitle
            this.imgNext = this.json[this.current].imageURL
          }

          this.exitUp = true
          this.enterUp = true
        }
        else if (type === 2) {
          // indicator item was clicked
          //window.clearInterval(this.repeat)
          //slider.repeat = window.setInterval(function() { slider.goToImg(3, 0) }, 20000)

          if (index - 1 > this.current) {
            this.exitDown = true
          }
          else if (index - 1 < this.current) {
            this.exitUp = true
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
          this.exitUp = true
        }
      }
    }
  })

  var request = new XMLHttpRequest()
  request.open('GET', 'https://api.jsonbin.io/b/5c120111f35b3d1274b7f680/1', true)

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {

      // parse JSON file
      var data = JSON.parse(request.responseText)

      // get JSON child count
      var length = Object.keys(data).length
      slider.length = length

      // animate slider
      if (length > 0) {
        slider.json = data
        slider.title = data[0].title
        slider.subtitle = data[0].subtitle
        slider.img = data[0].imageURL
        slider.titleNext = data[1].title
        slider.subtitleNext = data[1].subtitle
        slider.imgNext = data[1].imageURL
        slider.loaded = true
        slider.enterUp = true
        //slider.repeat = window.setInterval(function() { slider.goToImg(3, 0) }, 20000)
      }
    }
    else {
      // We reached our target server, but it returned an error
      // TODO: nothing
    }
  }

  request.onerror = function() {
    // There was a connection error of some sort
    // TODO: nothing
  }

  request.send()
}

function initStudentSlider() {

  var request = new XMLHttpRequest()
  request.open('GET', 'https://api.jsonbin.io/b/5c140b3327794d69b3d88536/1', true)

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {

      // parse JSON file
      var data = JSON.parse(request.responseText)

      // get JSON child count
      var length = Object.keys(data).length

      // initialize slider
      if (length > 0) {
        document.getElementById("studentLoading").style.opacity = 0;

        var random = new Array(length)
        for (var i = 0; i < length; i++) {
          random[i] = i
        }
        shuffleArray(random)
        var flex = document.getElementById("headshot-flex")
        var headshot = document.getElementById("headshot-container")

        for (var i = 0; i < length; i++) {
          var currData = data[random[i]]
          var clone = headshot.cloneNode(true)
          clone.childNodes[1].childNodes[1].src = currData.imageURL
          clone.childNodes[3].textContent = currData.name
          clone.childNodes[5].textContent = currData.major
          clone.style.transition = "opacity 300ms ease"
          flex.appendChild(clone)
        }

        flex.removeChild(headshot)

        window.setTimeout(function() {
          flex.childNodes.forEach(function(currentValue) {
            if (currentValue.style !== undefined) {
              currentValue.style.opacity = 1
            }
          })
        }, 150)
      }
    }
    else {
      // We reached our target server, but it returned an error
      // TODO: nothing
    }
  }

  request.onerror = function() {
    // There was a connection error of some sort
    // TODO: nothing
  }

  request.send()
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
  var imgSliderItem = document.getElementById('imgSliderItem')
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

  var request = new XMLHttpRequest()
  request.open('GET', 'https://api.jsonbin.io/b/5bf69ee7746e9b593ec17162/3', true)

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {

      // parse JSON file
      var data = JSON.parse(request.responseText)

      // get JSON child count
      var length = Object.keys(data).length
      imgSlider.length = length

      // animate imgSlider
      if (length > 0) {
        imgSlider.json = data
        imgSlider.loaded = true
        imgSlider.animate = true
        imgSlider.repeat = window.setInterval(function() { imgSlider.goToImg(3, 0) }, 10000)
      }
    }
    else {
      // We reached our target server, but it returned an error
      // TODO: nothing
    }
  }

  request.onerror = function() {
    // There was a connection error of some sort
    // TODO: nothing
  }

  request.send()
}

/*
* ===============================================
* UFSJ functions
* ===============================================
*/

function initUfsjMore() {
  window.addEventListener("resize", initUfsjMore)
  var expand = document.getElementById("expand")
  var clone = expand.cloneNode(true)
  clone.style.height = "auto"
  clone.style.opacity = 0
  clone.style.position = "absolute"
  expand.parentElement.appendChild(clone)
  window.ufsjMoreHeight = window.getComputedStyle(clone).height
  expand.parentElement.removeChild(clone)
  expand.style.height = "0px"
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
  var script = document.createElement('script')
  document.head.appendChild(script)
  script.onload = code
  script.onreadystatechange = code
  script.src = url
}

function onClickEnable() {
  document.getElementById('enable').style.display = 'none'
  loadJS("https://maps.googleapis.com/maps/api/js?key=AIzaSyBmLRdxEqN-OH4gufW70pwXNiDmi9eMkps", initMap)
}

function initMap() {
  var loc = {lat: 33.9556157, lng: -83.3804178}

  var map = new google.maps.Map(document.getElementById('map'), {
    center: loc,
    zoom: 15
  })

  var marker = new google.maps.Marker({position: loc, map: map})
}
