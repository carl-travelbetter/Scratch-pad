let today = new Date();
let targetDate = new Date("2025, 09, 24, 18:00:00");

function createCountdown()
{
  console.log("Create Countdown");
  //create a basic countdown and get the maths right.
  const date = document.getElementById("date").valueAsDate;
  //Get today 
  let today = new Date();
  //Calculate the seconds between the date selected and today
  let totalSecondsBetween = Math.floor((date - today) / 1000);
  //Calculate (rounding down) full days in those seconds 
  let days = Math.floor(totalSecondsBetween / 86400);
  //Calculate the days remaining in the total seconds (will be a real/float)
  let daysRemaining = totalSecondsBetween % 86400;
  //Calculate the full hours in the days remaining
  let hours = Math.floor(daysRemaining / 3600);
  //Calculate the hours remaining
  let hoursRemaining = daysRemaining % 3600;
  //Calculate the full minutes 
  let minutes = Math.floor(hoursRemaining / 60);
  //Calculate the remaining minutes which is in seconds
  let seconds = hoursRemaining % 60;
 
  //This is the total set of seconds between the two dates
  

  //Need to take away the full set of days and then show the difference (after getting the total hours and total minutes)
  //Get the difference between the full days and the date, then calculate the full hours. 
  
  const output = document.getElementById("output");
  output.innerHTML = "";
  const timer = document.createElement("p");
  timer.textContent = "Days "+days+" hrs "+hours+" mins "+minutes+" secs "+seconds;
  output.appendChild(timer);
  createMonthOutput(date);
}

function createMonthOutput(date)
{
  console.log("Create Month Output");
  let today = new Date();
  console.log("Today month "+today.getMonth());
  console.log("Date selected month "+date.getMonth());
  //Work out how many years to go (for mutiplication factor of months) then add the difference in the month values;
  //e.g. (2027 - 2025) * 12 = 24 months, June - December, 5 - 11 = -6, therefore 24 - 6 = 18 months
  let monthsDiff = ((date.getYear() - today.getYear()) * 12) + (date.getMonth() - today.getMonth());
  //Move on today by the months to go so only days left.
  let tempDate = new Date();
  tempDate.setMonth(today.getMonth()+monthsDiff);

  //Work out the whole month count 
  if (date.getDate() < today.getDate())
  {
    monthsDiff--;
  }

  //If the monthDiff is set to -1 then move to 0
  if (monthsDiff < 0)
  {
    monthsDiff = 0;
  }
  
  //set a ms convert value
  msPerDay = 1000 * 60 * 60 * 24;
  
  //calculate the total days remaining
  let totalDaysRemaining = Math.floor((date - tempDate) / msPerDay);

  //calculate the weeks remaining
  let weeks = Math.floor(totalDaysRemaining / 7);

  //calculate the remainder of days
  let days = totalDaysRemaining % 7;

  //Output the data
  const monthOutput = document.getElementById("month-output");
  monthOutput.innerHTML = "";
  const monthDiffOutput = document.createElement("p");
  monthDiffOutput.textContent = monthsDiff+" Months "+weeks+" Weeks "+days+" Days to go.";
  monthOutput.appendChild(monthDiffOutput);
}
