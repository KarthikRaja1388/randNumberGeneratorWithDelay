const display = document.querySelector(".display");
const btnRandom = document.querySelector(".btn-random");

const delay = 3000;

btnRandom.addEventListener("click", () => {
  let count = 3;
  let intervalId = setInterval(() => {
    display.textContent = count + " secs";
    count--;

    if (count === 0) {
      clearInterval(intervalId);
      display.textContent =
        "Random number: " + Math.floor((Math.random() * 100).toFixed(2));
    }
  }, 1000);
});
