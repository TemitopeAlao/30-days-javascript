const keys = document.querySelectorAll(".key");
const blackKeys = document.querySelectorAll(".key.black");
const whiteKeys = document.querySelectorAll(".key.white");

keys.forEach((key) => key.addEventListener("click", handleKeyClick));

function handleKeyClick() {
  playKey(this);
}
function playKey(key) {
  const KeyAudio = document.getElementById(key.dataset.note);
  KeyAudio.currentTime = 0;
  KeyAudio.play();
  key.classList.add("active");
  KeyAudio.addEventListener("ended", () => {
    key.classList.remove("active");
  });
}
