let tl = gsap.timeline();
const tlMenu = new TimelineMax();

tlMenu.to('.menu', 0.1, {autoAlpha: 1, display: "block"})
  .from('.menu__top', 0.5, {y: -50,  opacity: 0})
  .from('.menu__nav', 0.5, {y: 50, opacity: 0})
  .from('.social', 0.3, {y: 50, opacity: 0})
  .from('.sub-menu', 0.5, {y: 50,  opacity: 0})

  tlMenu.pause();


  $(document).ready(function() {
    $('.btn-reset').click(function() {
      tlMenu.play();
    });
  });

  $(document).ready(function() {
    $('.close').click(function() {
      tlMenu.reverse();
    });
  });


  tl.from('.hero__left', {opacity: 0, y: 100, duration: 1}, 0.3)
    .from('.hero__descr', {opacity: 0, duration: 1 },1)
    .from('.hero__btn', {opacity: 0, y: 100, duration: 1.5}, 0.4)
    .from("#pw-1", {opacity: 0, duration: 0.4},1)
    .from("#pw-2", {opacity: 0, duration: 0.4},1.3)
    .from("#pw-3", {opacity: 0, duration: 0.4},1.5)
    .from(".photos__author", {opacity: 0, duration: 0.4},1.7)


  // tl.to('menu__top', {opacity: 0, x: 60, duration: 0.7})
  //   .from('.menu--open' ,{opacity: 0, y: 60, duration: 0.6})
  //   .from('.menu', {opacity: 0,  duration: 1})
  //   .from('#sub1', {opacity: 0, duration: 0.7})
  //   .from('#sub2', {opacity: 0, duration: 0.7})

















