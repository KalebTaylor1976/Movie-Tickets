//Business Logic

function Ticket(movieName, timeOfDay, age) {
  this.movieName = movieName;
  this.timeOfDay = timeOfDay;
  this.age = age;
}

Ticket.prototype.calculatePrice = function() {
  const BASE_PRICE = 10;
  const MATINEE_PRICE = 8;
  const SENIOR_DISCOUNT = 0.2; // 20% discount for seniors
  let price = BASE_PRICE;

  // Check for matinee price
  if (this.timeOfDay === 'matinee') {
    price = MATINEE_PRICE;
  }

  // Check for senior discount
  if (this.age >= 65) {
    price = price * (1 - SENIOR_DISCOUNT);
  }

  return price;
};

//UI Logic

const ticketForm = document.getElementById('ticket-form');
const priceContainer = document.getElementById('price-container');

ticketForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const movieName = document.getElementById('movie-name').value;
  const timeOfDay = document.getElementById('time-of-day').value;
  const age = document.getElementById('age').value;

  const ticket = new Ticket(movieName, timeOfDay, age);
  const price = ticket.calculatePrice();

  priceContainer.innerHTML = `Ticket Price: $${price.toFixed(2)}`;
});