let selectedCoffee = '';

function chooseType(coffee) {
  selectedCoffee = coffee;
  document.getElementById("selectedCoffee").innerText = "You chose " + coffee + "!";
  document.getElementById("selectionModal").style.display = "block";
}

function closeModal() {
  document.getElementById("selectionModal").style.display = "none";
}

function selectTemperature(type) {
  document.getElementById("orderDetails").innerText = "Order: " + selectedCoffee + " (" + type + ")";
  closeModal();
  
window.onclick = function(event) {
  const modal = document.getElementById("selectionModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};


const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

themeToggle.onclick = function() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeIcon.src = "./Images/moon.png";
  } else {
    themeIcon.src = "./Images/theme.png";
  }
};
