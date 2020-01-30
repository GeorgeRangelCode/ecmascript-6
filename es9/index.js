const obj = {
  name: "jorge",
  age: 25,
  country: "COL"
};

let { name, ...all } = obj;
console.log(name, all);
console.log(all);

const obj2 = {
  name: "pepe"
};

const obj3 = {
  ...obj2,
  country: "COL"
};

console.log(obj3);

/** promise finally */
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello world"), 3000)
      : reject(new Error("Test error"));
  });
};

helloWorld()
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log("Final");
  });

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");

const year = match[1];
const mounth = match[2];
const day = match[3];
console.log(year, mounth, day);
