class Person {
  constructor(name, age, address) {
      this.name = name;
      this.age = age;
      this.address = address;
  }

  displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Address: ${this.address}`);
  }
}

// Example usage:
// Creating an instance of the Person class
let person1 = new Person("John Doe", 25, "123 Main Street, Cityville");

// Displaying details
person1.displayDetails();
