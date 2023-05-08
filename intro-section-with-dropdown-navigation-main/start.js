const menu = document.querySelector(".menu");
const navbar = document.querySelector(".header-nav");
const features = document.querySelector(".features");
const company = document.querySelector(".company");

menu.addEventListener("click", ()=>{
    navbar.classList.toggle("show")
})
features.addEventListener("click", ()=>{
    drop.classList.toggle("drop-show")
})
company.addEventListener("click", ()=>{
    drop.classList.toggle("drop-show")
})