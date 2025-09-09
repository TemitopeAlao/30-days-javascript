const upload = document.querySelector("input");
const image = document.querySelector(".img img");
const close = document.querySelector(".icon .close");

// handle file upload
upload.addEventListener("change", uploadFile);

// function for uploading file
function uploadFile(event) {
  console.log(event);
  console.log(event.target);
  console.log(event.target.files);
  if (event.target.files && event.target.files[0]) {
    image.src = URL.createObjectURL(event.target.files[0]);
    image.classList.add("active");
    close.classList.add("exit");
  }
}

// handle close button
close.addEventListener("click", () => {
  image.classList.toggle("active");
  close.classList.toggle("exit");
});
