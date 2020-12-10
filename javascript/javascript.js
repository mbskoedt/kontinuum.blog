// loading screen
/*
var loadingScreen = document.getElementById("loading-screen");

function playOnLoad() {
  loadingScreen.play();
}

function onReady(callback) {
  var intervalID = window.setInterval(checkReady, 2500);

  function checkReady() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalID);
      callback.call(this);
    }
  }
}

function show(id, value) {
  document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function() {
  setDefaultPage();
  show('loading', false);
});
*/

// SPA

// hide all pages
function hideAllPages() {
  let pages = document.querySelectorAll(".page");
  for (let page of pages) {
    page.style.display = "none";
  }
}

// show page or tab
function showPage(pageId) {
  hideAllPages();
  document.querySelector(`#${pageId}`).style.display = "block";
  let headerHeight = document.getElementById('header').offsetHeight - document.getElementById('menu').offsetHeight;
  if (pageId === "content") {
    document.querySelector(`#${pageId}`).style.marginTop = "90vh";
  } else {
    document.querySelector(`#${pageId}`).scrollTop;
    document.querySelector(`#${pageId}`).style.marginTop = headerHeight + "px";
  }

  setActiveTab(pageId);
  collapseMenu();
}

// set default page
function setDefaultPage() {
  let page = "content";
  if (location.hash) {
    page = location.hash.slice(1);
  }
  showPage(page);
}

// sets active tabbar/ menu item
function setActiveTab(pageId) {
  let pages = document.querySelectorAll(".menu a");
  for (let page of pages) {
    if ("#" + pageId === page.getAttribute("href")) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }
  }
}

setDefaultPage();

// go to content window from arrow

function goTocontent() {
  let contentWindow = document.getElementById("content-header");
  contentWindow.scrollIntoView();
}

function toTheTop() {
  let contentWindow = document.getElementById("pages-wrapper");
  contentWindow.scrollIntoView();
}

// remove :checked from menu

function collapseMenu() {
  document.getElementById('menu-btn').checked = false;
}

// gives 100 pixels to href-requests

window.addEventListener("hashchange", function() {
  window.scrollTo(window.scrollX, window.scrollY - 100);
});

// navbar gets 100 pixels to href-requests

function subNavRedirect(x) {
  if (location.hash === "#contact" || "#about") {
    showPage('content');
  }
  let measures = document.getElementById("unique-" + x.id).getBoundingClientRect();
  let bodyMeasures = document.body.getBoundingClientRect();
  let offSet = measures.top - bodyMeasures.top;
  window.scrollTo(0, offSet - 100);
  collapseMenu()
}

// close cookies

function closeCookies() {
  let cookieAlert = document.getElementById("cookie-alert");
  cookieAlert.classList.add("displayNone");
}

// show/hide video player

let heroVideo = document.getElementById("hero-video");

function showControls() {
  heroVideo.setAttribute("controls", "controls")
}

function removeControls() {
  heroVideo.removeAttribute("controls")
}

// show/hide sub menu

function showSubMenu() {
  let arrow = document.getElementById("sub-nav-triangle")
  let expandedSubNav = document.getElementById("content-subnav")

  if (expandedSubNav.classList.contains("display-none")) {
    arrow.classList.remove("rotateTop");
    arrow.classList.add("rotateDown");
    expandedSubNav.classList.remove("display-none");
    expandedSubNav.classList.add("display-block");
    console.log("Down")
  } else {
    arrow.classList.remove("rotateDown");
    arrow.classList.add("rotateTop");
    expandedSubNav.classList.remove("display-block");
    expandedSubNav.classList.add("display-none");
    console.log("up")
  }
}

function removeSubMenu() {
  let arrow = document.getElementById("sub-nav-triangle")
  let expandedSubNav = document.getElementById("content-subnav")

  if (expandedSubNav.classList.contains("display-none")) {
    arrow.classList.remove("rotateTop");
    arrow.classList.add("rotateDown");
    expandedSubNav.classList.remove("display-none");
    expandedSubNav.classList.add("display-block");
    console.log("Down")
  } else {
    arrow.classList.remove("rotateDown");
    arrow.classList.add("rotateTop");
    expandedSubNav.classList.remove("display-block");
    expandedSubNav.classList.add("display-none");
    console.log("up")
  }
}

function removeControls() {
  heroVideo.removeAttribute("controls")
}


// expand navbar animation
/*
function expandNav(element) {
  let arrow = document.getElementById("sub-nav-triangle")
  let expandedSubNav = document.getElementById("content-subnav")

  var queryString = window.matchMedia("(max-width: 1040px)")
  queryString.addListener(mediaQuery) // Attach listener function on state changes
  function mediaQuery(queryString) {
console.log(queryString);
    if (queryString.matches) {
console.log(queryString);
      if (expandedSubNav.classList.contains("display-none")) {
        arrow.classList.remove("rotateTop");
        arrow.classList.add("rotateDown");
        expandedSubNav.classList.remove("display-none");
        expandedSubNav.classList.add("display-block");
        console.log("Down")
      } else {
        arrow.classList.remove("rotateDown");
        arrow.classList.add("rotateTop");
        expandedSubNav.classList.remove("display-block");
        expandedSubNav.classList.add("display-none");
        console.log("up")
      }
    }
  }
} */
