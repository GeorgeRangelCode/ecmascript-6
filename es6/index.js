/** ES5 */
function newFuntion(name, age, country) {
  var name = name || "Jorge";
  var age = age || 25;
  var country = country || "Colombia";
  console.log(name, age, country);
}

/** ES6 */
function newFuntion2(name = "Jorge", age = 25, country = "Colombia") {
  console.log(name, age, country);
}

newFuntion2();
newFuntion2("Pedro", 23, "Mexico");

let hello = "Hola";
let world = "Mundo";

/** ES5 */
let hi = hello + " " + world;
console.log(hi);

/** ES6 Template literals */
let hi2 = `${hello} ${world}`;
console.log(hi2);
