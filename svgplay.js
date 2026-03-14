console.log('SVG Play');

const circle = document.getElementById('circle');
console.log(circle);
let radius = 40;

const button = document.getElementById('color-button');

circle.addEventListener("click", () => {
      
      console.log("Circle Expense Button Clicked");
      radius += 2;
      circle.setAttribute("fill", "gold");
       circle.setAttribute("r", radius);
      console.log('Radius is now gold fill '+radius);
      });

button.addEventListener('click', changeColor);

function changeColor()
{
      console.log('Change Colour');
      circle.style.fill = "gold";
}
