// ==UserScript==
// @name        Hide Verified Tweets
// @namespace   http://twitter.com
// @match     *://x.com/*
// @match     *://twitter.com/*
// @version     1
// @grant       none
// @description Hide Verified Tweets
// ==/UserScript==



function hideDivsWithPath() {
  console.log("Looking for 'verified' Tweets and deleting")
  var allDivs = document.getElementsByTagName('div');
  var elements = Array.from(allDivs).filter(el => el.getAttribute('data-testid') === 'cellInnerDiv');

  elements.forEach((element) => {
    var paths = element.getElementsByTagName("path");
    Array.from(paths).forEach((path) => {
      if (path.getAttribute("d") && path.getAttribute("d").startsWith("M20.396")) {
        element.style.display = 'none';
        console.log("hiding element ");
        console.log(element);
      }
    });
  });
}

// Attach event listener to run the function whenever the mouse scrolls
window.addEventListener('scroll', hideDivsWithPath);
