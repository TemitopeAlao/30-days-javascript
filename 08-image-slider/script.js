const slider = document.querySelector(".slider");
const before = document.querySelector(".image-before");
const container = document.querySelector(".container");
const button = document.querySelector("#toggleBtn");

let isDragging = false;

function handleSlider(e) {
  if (!isDragging) return;

  // Get the position of the container (distance from top/left of the page)
  let rect = container.getBoundingClientRect();

  // Calculate mouse position inside the container
  // e.clientX = mouse X position in the whole window
  // rect.left = where the container starts
  let x = e.clientX - rect.left; // So subtracting gives us: "how far the mouse is inside the container"

  // Get the total width of the container
  let size = container.offsetWidth;

  // Make sure the slider does not go outside the container
  if (x < 0) x = 0;
  if (x > size) x = size;

  // Update the "before" image width so it reveals more or less
  before.style.width = x + "px";

  // Move the slider line to the same X position
  slider.style.left = x + "px";

  // ----- Update button text ----
  let half = size / 2;
  if (x < half) {
    button.textContent = "Grey";
    button.style.backgroundColor = "black";
    button.style.color = "white";
  } else {
    button.textContent = "Colored";
    button.style.backgroundColor = "#532d2d";
    button.style.color = "white";
  }
}
// When mouse is pressed down on the slider → start dragging
slider.addEventListener("mousedown", () => {
  isDragging = true;
});

// When mouse is released anywhere on the window → stop dragging
window.addEventListener("mouseup", () => {
  isDragging = false;
});

// Track mouse movement across the window
// Each time the mouse moves, we call handleSlider
window.addEventListener("mousemove", handleSlider);
