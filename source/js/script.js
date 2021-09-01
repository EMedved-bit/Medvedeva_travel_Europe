const menuPopup = document.querySelector(".menu-popup");
const navToogle = document.querySelector(".header-nav__toogle");
const menuToogle = document.querySelector(".menu-popup__button");
const menuLinks = document.querySelectorAll(".menu-popup__link");

menuPopup.classList.remove("menu-popup--nojs");
menuPopup.classList.add("menu-popup--closed");

navToogle.addEventListener("click", function(){
  menuPopup.classList.remove("menu-popup--closed");
})

menuToogle.addEventListener("click", function(){
  menuPopup.classList.add("menu-popup--closed");
})

menuLinks.forEach(function(link){
  link.addEventListener("click", function(){
    menuPopup.classList.add("menu-popup--closed");
  })
})

const tabButtons = document.querySelectorAll(".countries-tabs__button");
const tabs = document.querySelectorAll(".countries-tabs__content");
const tabLinks = document.querySelectorAll(".countries__link");

function removeActive () {
  tabButtons.forEach((button, index) => {
    button.classList.remove("countries-tabs__button--active");
    tabs[index].classList.remove("countries-tabs__content--active");
  })
}

tabButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    removeActive();
    button.classList.add("countries-tabs__button--active");
    tabs[index].classList.add("countries-tabs__content--active");
  })
})

tabLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    removeActive();
    tabButtons[index].classList.add("countries-tabs__button--active");
    tabs[index].classList.add("countries-tabs__content--active");
  })
})

const buyPopupButtons = document.querySelectorAll(".js-buy-button");
const buyPopup = document.querySelector(".popup-buy-form");
const closeBuyButton = document.querySelector(".js-close-buy");
const userPhone = document.querySelector("#user-phone");
const userEmail = document.querySelector("#user-email");
const buyForm = document.querySelector(".form--popup");
const successPopup = document.querySelector(".popup-success");
const closeSuccessButton = document.querySelector(".js-close-sucess");
const feedbackForm = document.querySelector(".form");
const phone = document.querySelector("#phone");
const mail = document.querySelector("#mail");

buyPopupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    buyPopup.classList.add("popup-buy-form--active");
    userPhone.focus();
  })
})

closeBuyButton.addEventListener("click", function(){
  buyPopup.classList.remove("popup-buy-form--active");
})

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    buyPopup.classList.remove("popup-buy-form--active");
  }
})

let isStorageSupport = true;
let storageUserPhone = "";
let storageUserEmail = "";

try {
  storageUserPhone = localStorage.getItem("phone");
  storageUserEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

if (storageUserPhone) {
  userPhone.value = storageUserPhone;
  phone.value = storageUserPhone;
}

if(storageUserEmail) {
  userEmail.value = storageUserEmail;
  mail.value = storageUserEmail;
}

buyForm.addEventListener("submit", function(event) {
  event.preventDefault();
  buyPopup.classList.remove("popup-buy-form--active");
  successPopup.classList.add("popup-success--active");
  if (isStorageSupport) {
    localStorage.setItem("phone", userPhone.value);
    localStorage.setItem("email", userEmail.value);
  }
})

closeSuccessButton.addEventListener("click", function(){
  successPopup.classList.remove("popup-success--active");
})

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    successPopup.classList.remove("popup-success--active");
  }
})

feedbackForm.addEventListener("submit", function(event) {
  event.preventDefault();
  successPopup.classList.add("popup-success--active");
  if (isStorageSupport) {
    localStorage.setItem("phone", userPhone.value);
    localStorage.setItem("email", userEmail.value);
  }
})
