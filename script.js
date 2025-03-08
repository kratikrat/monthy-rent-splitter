var cursor = document.querySelector("#cursor")
var main = document.querySelector("#main")

function calculate() {
   var houseRent = parseFloat(document.getElementById("houseRent").value);
   var food = parseFloat(document.getElementById("food").value);
   var electricity = parseFloat(document.getElementById("electricity").value);
   var water = parseFloat(document.getElementById("water").value);
   var internet = parseFloat(document.getElementById("internet").value);
   var maintenance = parseFloat(document.getElementById("maintenance").value);
   var groceries = parseFloat(document.getElementById("groceries").value);
   var numPeople = parseInt(document.getElementById("numPeople").value);

   var totalExpenses = houseRent + food + electricity + water + internet + maintenance + groceries;
   var rentPerPerson = totalExpenses / numPeople;

   document.getElementById("result").innerHTML = "Total Expenses: " + totalExpenses.toFixed(2) + " INR" + "<br>Each person should pay: " + rentPerPerson.toFixed(2) + " INR";
}

// Toggle between light and dark theme
function toggleTheme() {
   document.body.classList.toggle('dark-mode');
   const icon = document.getElementById("theme-toggle");
   // Toggle between moon and sun icons based on theme
   if (document.body.classList.contains('dark-mode')) {
       icon.classList.replace('ri-moon-fill', 'ri-sun-fill');
   } else {
       icon.classList.replace('ri-sun-fill', 'ri-moon-fill');
   }
}

function customCursor(){
   main.addEventListener("mousemove", function (event) {
      gsap.to(cursor, {
          x: event.x,
          y: event.y,
          ease: "back"
      })
  })
}

document.getElementById("year").textContent = new Date().getFullYear();
customCursor()