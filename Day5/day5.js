// =============================
// Day 5 – JavaScript Practice
// =============================

// 41. Destructuring

const fruits = ["Apple", "Banana", "Orange"];
const [first, second] = fruits;
console.log(first, second);

const user = { name: "Ravi", age: 25 };
const { name, age } = user;
console.log(name, age);

const person = { id: 1, profile: { city: "Chennai" } };
const { profile: { city }, country = "India" } = person;
console.log(city, country);

// 42. Convert Callback to Promise

function getDataPromise() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data received via promise"), 1000);
  });
}
getDataPromise().then(data => console.log(data));

// 43. Async/Await Function

function fetchData() {
  return new Promise((resolve) => setTimeout(() => resolve("Fetched successfully!"), 1000));
}
async function displayData() {
  const result = await fetchData();
  console.log(result);
}
displayData();

// 44. Fetch API Call

async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("Network error");
    const data = await res.json();
    console.log("Users fetched:", data.length);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
getUsers();

// 45. Event Loop Example

console.log("Start");
setTimeout(() => console.log("Async task"), 0);
Promise.resolve().then(() => console.log("Promise resolved"));
console.log("End");

// 46. map(), filter(), reduce() Example

const products = [
  { name: "Apple", price: 100 },
  { name: "Banana", price: 40 },
  { name: "Orange", price: 60 }
];
const updated = products.map(p => ({ ...p, price: p.price * 1.1 }));
const filtered = updated.filter(p => p.price > 50);
const total = filtered.reduce((sum, p) => sum + p.price, 0);
console.log("Updated:", updated);
console.log("Filtered:", filtered);
console.log("Total:", total);

// 47. Stack Implementation

class Stack {
  constructor() { this.items = []; }
  push(item) { this.items.push(item); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
  isEmpty() { return this.items.length === 0; }
}
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log("Top:", stack.peek());
stack.pop();
console.log("Is empty:", stack.isEmpty());

// 48. Queue Implementation

class Queue {
  constructor() { this.items = []; }
  enqueue(item) { this.items.push(item); }
  dequeue() { return this.items.shift(); }
  front() { return this.items[0]; }
  isEmpty() { return this.items.length === 0; }
}
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log("Front:", queue.front());
queue.dequeue();
console.log("Is empty:", queue.isEmpty());

// 49. Intersection of Two Sets

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);
const intersection = new Set([...setA].filter(item => setB.has(item)));
console.log(intersection);

// 50. Shallow vs Deep Copy

const obj = { name: "Ravi", details: { city: "Chennai" } };
const shallow = { ...obj };
shallow.details.city = "Bangalore";
console.log("After shallow copy change:", obj.details.city);
const deep = JSON.parse(JSON.stringify(obj));
deep.details.city = "Delhi";
console.log("After deep copy change:", obj.details.city);
