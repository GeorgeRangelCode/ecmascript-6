/** Object entries */

const data = {
  frontend: "Jorge",
  backend: "Pepe",
  design: "Pablo"
};

const entries = Object.entries(data);

console.log(entries);

/** Cuantos elementos tiene un objecto */
console.log(entries.length);

/** Object values */
const values = Object.values(data);
console.log(values);

/** padStart y padEnd */
const string = "hello";
console.log(string.padStart(8, "hi "));
console.log(string.padEnd(10, " Juan"));

/** Async await */
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello world"), 3000)
      : reject("No funciono");
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();
