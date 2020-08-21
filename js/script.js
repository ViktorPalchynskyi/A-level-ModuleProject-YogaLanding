$(document).ready(function () {
   $('.about__slider').slick({
      arrows: true,
      nextArrow: `<button type="button" class="about_next"><span class="icon-chevron-left"></button>`,
      prevArrow: `<button type="button" class="about_prev"><span class="icon-chevron-right"></span></span></button>`
   });
});