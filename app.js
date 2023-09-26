const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const menu = document.querySelector(".menu");
const headline = document.querySelector(".headline");

const tl = gsap.timeline();

tl.fromTo(hero, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut});