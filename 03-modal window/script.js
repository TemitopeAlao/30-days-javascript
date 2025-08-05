"use strict";

const overlay = document.querySelector(".overlay");
const btn = document.querySelector(".button");
const modalWindow = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-modal");

const openWindow = function () {
  btn.classList.add("hidden");
  overlay.classList.remove("hidden");
  modalWindow.classList.remove("hidden");
  modalWindow.classList.add("scale-in-center");
};
const closeWindow = function () {
  modalWindow.classList.remove("scale-in-center");
  modalWindow.classList.add("scale-out-center");

  modalWindow.addEventListener("animationend", function handler() {
    modalWindow.classList.add("hidden");
    overlay.classList.add("hidden");
    btn.classList.remove("hidden");
    modalWindow.classList.remove("scale-out-center");
    modalWindow.removeEventListener("animationend", handler);
  });
};

btn.addEventListener("click", openWindow);
closeBtn.addEventListener("click", closeWindow);
overlay.addEventListener("click", closeWindow);

document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key === "Escape" && !modalWindow.classList.contains("hidden")) {
    closeWindow();
  }
});
