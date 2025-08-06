const speakBtn = document.querySelector(".button");
const textInput = document.querySelector("#typed-text");
const languageSelect = document.getElementById("language");
const voiceSelect = document.getElementById("voice");

// Initialize Typed.js
const typed = new Typed("#typed-text", {
  strings: ["Enter your text here..."],
  typeSpeed: 70,
  backSpeed: 90,
  loop: true,
  showCursor: false,
});

// Remove the typed animation on focus
textInput.addEventListener("focus", () => {
  typed.destroy(); //Stop and remove Typed.js animation
  textInput.value = "";
  textInput.style.color = "#000";
});

let voices = [];

function loadVoices() {
  voices = speechSynthesis.getVoices();

  // Clear previous
  voiceSelect.innerHTML = "";

  // Filter voices to only include those that match the selected language
  const filteredVoices = voices.filter((voice) =>
    voice.lang.startsWith(languageSelect.value)
  );
  //console.log(filteredVoices);

  // Add each matching voice as an <option> in the dropdown
  filteredVoices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });
}

function speakText() {
  const text = textInput.value.trim(); // Get user-typed text and trim whitespace
  const selectedVoiceName = voiceSelect.value; // Get selected voice from dropdown

  // Stop if there’s no text or no voice selected
  if (!text || !selectedVoiceName) return;

  const utterance = new SpeechSynthesisUtterance(text); // Create the speech object

  // Find the voice object matching the selected voice name
  const selectedVoice = voices.find(
    (voice) => voice.name === selectedVoiceName
  );

  utterance.voice = selectedVoice; // Assign the chosen voice to the utterance

  // Add a pulsating animation class to the button to show it's speaking
  speakBtn.classList.add("pulsate");

  // When speech ends, remove the animation class
  utterance.onend = () => {
    speakBtn.classList.remove("pulsate");
  };

  // Start speaking
  speechSynthesis.speak(utterance);
}

// When the list of voices is ready (some browsers load this async), call loadVoices
speechSynthesis.onvoiceschanged = loadVoices;

// Reload voices whenever the user changes the language selection
languageSelect.addEventListener("change", loadVoices);

// Speak when button is clicked
speakBtn.addEventListener("click", speakText);
