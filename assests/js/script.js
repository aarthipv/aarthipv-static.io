'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');


// navToggle function
const navToggleFunc = function () { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);



// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');


for (let i = 0; i < themeBtn.length; i++) {

  themeBtn[i].addEventListener('click', function () {

    // toggle `light-theme` & `dark-theme` class from `body`
    // when clicked `theme-btn`
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    for (let i = 0; i < themeBtn.length; i++) {

      // When the `theme-btn` is clicked,
      // it toggles classes between `light` & `dark` for all `theme-btn`.
      themeBtn[i].classList.toggle('light');
      themeBtn[i].classList.toggle('dark');

    }

  })

}

document.addEventListener('DOMContentLoaded', function() {
  var blogTextContainer = document.querySelector('.blog-text-container');

  if (blogTextContainer) {
    blogTextContainer.addEventListener('mouseenter', function() {
      blogTextContainer.classList.add('hover');
    });

    blogTextContainer.addEventListener('mouseleave', function() {
      blogTextContainer.classList.remove('hover');
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Select all links with the class "nav-link"
  var navLinks = document.querySelectorAll('.nav-link');

  // Add click event listener to each nav link
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      // Get the target section id from the data-target attribute
      var targetId = link.getAttribute('data-target');

      // Scroll to the target section
      var targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }

      // If it's a mobile navigation, close the mobile menu
      if (window.innerWidth < 768) {
        document.querySelector('.nav-close-btn').click();
      }
    });
  });
});
