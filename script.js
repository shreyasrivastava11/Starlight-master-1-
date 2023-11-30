"use strict";

const main = document.querySelector(".main-container");
const image = document.querySelector(".page-img");

main.addEventListener("mousemove", function (dets) {
  image.style.top = 1 - dets.y * 0.05 + "px";
  image.style.left = 1 - dets.x * 0.05 + "px";
});

const page3 = document.querySelector(".page-3");
const hand = document.querySelector(".hand");

const show = function (entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    hand.classList.remove("section--hidden");
  }
  //    entry.target.classList.add("section--hidden");
  else {
    hand.classList.add("section--hidden");
  }
};

const opt = {
  root: null,
  threshold: 0,
};

const handObserver = new IntersectionObserver(show, opt);

handObserver.observe(page3);
