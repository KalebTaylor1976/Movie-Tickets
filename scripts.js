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
