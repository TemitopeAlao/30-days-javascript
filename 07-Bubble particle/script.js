setInterval(particle, 300);

function particle() {
  const div = document.querySelector("div");
  const particle = document.createElement("span");

  let sizeOfParticle = Math.random();

  particle.style.top = `${Math.random() * innerHeight}px`;
  particle.style.left = `${sizeOfParticle * innerWidth}px`;

  div.appendChild(particle);

  setTimeout(() => particle.remove(), 3000);
}
