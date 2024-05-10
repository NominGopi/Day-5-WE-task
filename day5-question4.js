class UberPriceCalculator {
  constructor(baseFare, costPerMinute, costPerMile) {
      this.baseFare = baseFare;
      this.costPerMinute = costPerMinute;
      this.costPerMile = costPerMile;
  }

  calculatePrice(distance, time) {
      const distanceCost = distance * this.costPerMile;
      const timeCost = time * this.costPerMinute;
      const totalCost = this.baseFare + distanceCost + timeCost;
      return totalCost;
  }
}

// Example usage
const calculator = new UberPriceCalculator(2.5, 0.3, 1.5);
const distance = 10; // in miles
const time = 20; // in minutes
const price = calculator.calculatePrice(distance, time);
console.log(`The price for the trip is $${price.toFixed(2)}`);
