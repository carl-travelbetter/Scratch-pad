let today = new Date();
let targetDate = new Date("2025, 09, 24, 18:00:00");

function createCountdown()
{
  console.log("Create Countdown");
  //create a basic countdown and get the maths right.
  const date = document.getElementById("date").valueAsDate;
  let today = new Date();
  let totalSecondsBetween = Math.floor((date - today) / 1000);
  let days = Math.floor(totalSecondsBetween / 86400);
  let daysRemaining = totalSecondsBetween % 86400;
  let hours = Math.floor(daysRemaining / 3600);
  let hoursRemaining = daysRemaining % 3600;
  let minutes = Math.floor(hoursRemaining / 60);
  let seconds = hoursRemaining % 60;
 
  //This is the total set of seconds between the two dates
  

  //Need to take away the full set of days and then show the difference (after getting the total hours and total minutes)
  //Get the difference between the full days and the date, then calculate the full hours. 
  
  const output = document.getElementById("output");
  const timer = document.createElement("p");
  timer.textContent = "Days "+days+" hrs "+hours+" mins "+minutes+" secs "+seconds;
  output.appendChild(timer);
  
}
