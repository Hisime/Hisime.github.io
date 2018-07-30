'use strict';

//get-ide__tabs
var tabContainer = document.querySelector('.get-ide__items');
var tabButtons = [].slice.call(tabContainer.querySelectorAll('.get-ide__item'));
var tabContents = [].slice.call(tabContainer.querySelectorAll('.get-ide__items-content'));
var tabActiveClass = 'get-ide__item--active';
var contentActiveClass = 'get-ide__items-content--active';

var turnOffElements = function (arrOfElements, activeClass) {
  arrOfElements.forEach(function (item) {
    item.classList.remove(activeClass);
  })
};

var turnOnElement = function (arrOfElements, elementIndex, activeClass) {
  arrOfElements[elementIndex].classList.add(activeClass);
};

var elementSwitcher = function (arrOfElements, elementIndex, activeClass) {
  turnOffElements(arrOfElements, activeClass);
  turnOnElement(arrOfElements, elementIndex, activeClass);
};

tabButtons.forEach(function (item) {
  item.addEventListener('click', function (event) {
    var eventElement = this;
    var indexOfElement = tabButtons.indexOf(this);
    elementSwitcher(tabButtons, indexOfElement, tabActiveClass);
    elementSwitcher(tabContents, indexOfElement, contentActiveClass);
  });
});

//leftNav

var leftBlock = document.querySelector('.steps');
var leftButtons = [].slice.call(leftBlock.querySelectorAll('.steps__item'));
var contentBlocks = [].slice.call(document.querySelectorAll('.anchor'));
var anchorsTop = contentBlocks.map(function (item) {
  return item.getBoundingClientRect().top + window.pageYOffset;
});

var timer;
var turnOffButtons = function () {
  leftButtons.forEach(function (item) {
    item.className = 'steps__item';
  });
};
var turnOnButtons = function (activeButton) {
  var activeButtonIndex = leftButtons.indexOf(activeButton);
  leftButtons.forEach(function (item, index) {
    if (index < activeButtonIndex) {
      item.classList.add('steps__item--passed');
    } else if (index === activeButtonIndex) {
      item.classList.add('steps__item--active');
    }
  });
};
var leftButtonsHandler = function (activeButton) {
  turnOffButtons();
  turnOnButtons(activeButton);
};
var compareAnchors = function (yOffSet) {
  anchorsTop.forEach(function (item, index) {
    if (item <= yOffSet) {
      leftButtonsHandler(leftButtons[index]);
    }
  });
};
window.addEventListener('scroll', function () {
  if (timer) {
    window.clearTimeout(timer);
  }

  timer = window.setTimeout(function() {
    compareAnchors(window.pageYOffset + 50);
  }, 100);
});
