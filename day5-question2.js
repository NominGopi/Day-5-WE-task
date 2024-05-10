class Circle {
  constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
  }

  getRadius() {
      return this.radius;
  }

  setRadius(radius) {
      this.radius = radius;
  }

  getColor() {
      return this.color;
  }

  setColor(color) {
      this.color = color;
  }

  toString() {
      return `Circle - radius: ${this.radius}, color: ${this.color}`;
  }

  getArea() {
      let a=Math.PI * this.radius * this.radius
      return a.toFixed(2)
  }

  getCircumference() {
      let c= 2 * Math.PI * this.radius;
      return c.toFixed(2)
  }
}


let myCircle = new Circle(2.5, "blue");
console.log("=====================")
console.log(myCircle.toString());
console.log("=====================")
console.log("Area:", myCircle.getArea());
console.log("=====================")
console.log("Circumference:", myCircle.getCircumference());
console.log("=====================")

// Updating properties
myCircle.setRadius(3.0);
myCircle.setColor("green");
console.log("after updating color and radius")
console.log(myCircle.toString());
console.log("=====================")