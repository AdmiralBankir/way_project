"use strict";document.addEventListener("DOMContentLoaded",function(){var e;if("IntersectionObserver"in window){e=document.querySelectorAll(".places__item-lazy");var t=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting){var n=e.target;n.classList.remove("places__item-lazy"),t.unobserve(n)}})});e.forEach(function(e){t.observe(e)})}});