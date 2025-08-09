const btnSwitch = document.querySelector(".l");
const percentageSlider = document.getElementById("percentage-slider");
const percentageValue = document.getElementById("percentage-value");
const screenContent = document.querySelector(".screen-content");
const buttons = document.querySelectorAll("ul li");
const calculate = document.querySelector(".math.equal");

console.log(buttons);
//Switch to DarkMode
const switchMode = function () {
  document.body.classList.toggle("dark-mode");
};
btnSwitch.addEventListener("click", switchMode);

//Percentage Slider
percentageSlider.addEventListener("input", function () {
  percentageValue.textContent = `${percentageSlider.value}%`;

  const value = screenContent.textContent.trim();

  if (!/^\d+(\.\d+)?$/.test(value)) {
    alert("Please input a valid number for percentage calculation");
    return; // checks if value is a valid number format with optional decimals.
  }

  const percent = Number(percentageSlider.value);
  const result = (Number(value) * percent) / 100;
  screenContent.textContent = result.toFixed(2);
});

//Digit computation

const handleClick = (e) => {
  const text = e.target.textContent;

  if (text === "C") {
    screenContent.textContent = "";
    return;
  }
  if (text === "x") {
    screenContent.textContent += "*";
    return;
  }
  if (text === "÷") {
    screenContent.textContent += "/";
    return;
  }
  if (text === "=") {
    return; // Do nothing here because calculation is handled separately
  }
  if (text === "%") {
    screenContent.textContent += "/100";
    return;
  }

  screenContent.textContent += text;
};

const resetSlider = () => {
  percentageSlider.value = 100;
  percentageValue.textContent = "100%";
};

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.textContent === "C" || e.target.textContent === "=") {
      resetSlider();
    }
    handleClick(e);
  });
});

//Handling Calculation

const runMath = function () {
  try {
    const result = eval(screenContent.textContent);
    screenContent.textContent = result;
  } catch {
    screenContent.textContent = "Error";
  }
};

calculate.addEventListener("click", runMath);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") runMath();
});
