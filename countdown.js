let today = new Date();
let targetDate = new Date("2025, 09, 24, 18:00:00");

function createCountdown()
{
  console.log("Create Countdown");
  //create a basic countdown and get the maths right.
  const date = document.getElementById("date").valueAsDate;
  let today = new Date();
  let secondsBetween = date - today;
  let daysBetween = Math.floor(secondsBetween / (1000 * 60 * 60 *24));
  const output = document.getElementById("output");
  const timer = document.createElement("p");
  timer.textContent = "Days "+daysBetween;
  output.appendChild(timer);
  
}
