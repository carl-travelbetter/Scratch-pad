console.log('SVG Play');

const circle = document.getElementById('circle');
let radius = 40;

circle.addEventListener("click", () => {
      
      console.log("Circle Expense Button Clicked");
      radius += 2;
      circle.setAttribute("fill", "gold");
      console.log('Radius is now fill '+radius);
      });
