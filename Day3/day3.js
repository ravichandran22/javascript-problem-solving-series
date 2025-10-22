// =============================
// Day 3 – JavaScript Practice
// =============================

// 1. Check if an object is empty
const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0;
};
console.log( isEmptyObject({}));
console.log(isEmptyObject({ name: "Ravi" }));


// 2. Clone an object (shallow and deep copy)
const user = { name: "Ravi", age: 25, address: { city: "Chennai" } };

// Shallow copy
const shallowCopy = { ...user };

// Deep copy
const deepCopy = JSON.parse(JSON.stringify(user));

shallowCopy.address.city = "Coimbatore";

console.log("Shallow Copy City:", user.address.city);
console.log("Deep Copy City:", deepCopy.address.city);


// 3. Get all keys and values from an object
const person = { name: "Ravi", age: 25, city: "Chennai" };

console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log("Entries:", Object.entries(person));


// 4. Sort an array of objects by a property (e.g., age)
const users = [
  { name: "Ravi", age: 25 },
  { name: "Arun", age: 30 },
  { name: "Kavi", age: 22 }
];

users.sort((a, b) => a.age - b.age);
console.log("Sorted by Age:", users);


// 5. Calculate total price from an array of objects
const cart = [
  { item: "Shirt", price: 500 },
  { item: "Jeans", price: 1200 },
  { item: "Shoes", price: 2000 }
];

const total = cart.reduce((sum, item) => sum + item.price, 0);
console.log("Total Price:", total);


// 6. Find unique values from an array of objects
const cityUsers = [
  { name: "Ravi", city: "Chennai" },
  { name: "Arun", city: "Chennai" },
  { name: "Kavi", city: "Coimbatore" }
];

const uniqueCities = [...new Set(cityUsers.map(u => u.city))];
console.log("Unique Cities:", uniqueCities);


// 7. Format today’s date as DD-MM-YYYY
const formatDate = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
};
console.log("Today's Date:", formatDate());


// 8. Count number of days between two dates
const daysBetween = (date1, date2) => {
  const diff = Math.abs(new Date(date2) - new Date(date1));
  return diff / (1000 * 60 * 60 * 24);
};
console.log("Days Between:", daysBetween("2025-10-01", "2025-10-16"));


// 9. Create a function that returns another function (closure)
function greet(name) {
  return function(message) {
    return `Hi ${name}, ${message}`;
  };
}
const greetRavi = greet("Ravi");
console.log(greetRavi("welcome to JavaScript!"));


// 10. Write a debounce function
function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

const handleSearch = debounce(() => {
  console.log("Search triggered!");
}, 1000);
