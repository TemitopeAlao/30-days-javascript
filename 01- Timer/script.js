const timer = document.querySelector(".timer-content");

setInterval(() => {
  const date = new Date();
  timer.innerHTML = date.toLocaleTimeString();
}, 1000);
