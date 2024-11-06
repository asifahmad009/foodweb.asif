function showHome() {
    window.location.href = "index.html";
  }
  function showHome() {
    window.location.href = "index.html";
  }
  
  function showCart() {
    alert("This is the cart section!");
  }
  
  function showHelp() {
    document.getElementById('helpSection').style.display = 'block';
  }
  
const vegItems = [
    { name: "Paneer Butter Masala", price: "$10.99", img: "veg-dish1.jpg" },
    { name: "Veg Biryani", price: "$8.99", img: "veg-dish2.jpg" },
  ];
  
  const nonVegItems = [
    { name: "Chicken Biryani", price: "$12.99", img: "non-veg-dish1.jpg" },
    { name: "Butter Chicken", price: "$14.99", img: "non-veg-dish2.jpg" },
  ];
  
  function renderMenu(items) {
    const menuGrid = document.getElementById}
    function showHome() {
  window.location.href = "index.html";
}
const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let index = 0;

const updateSlider = () => {
  const slideWidth = document.querySelector('.food-item').clientWidth + 20; // Calculate width including margin
  slider.style.transform = `translateX(-${index * slideWidth}px)`;
};

nextBtn.addEventListener('click', () => {
  const totalItems = document.querySelectorAll('.food-item').length;
  if (index < totalItems - 1) {
    index++;
    updateSlider();
  }
});

prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateSlider();
  }
});
